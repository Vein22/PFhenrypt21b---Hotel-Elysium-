import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


import { DataSource } from 'typeorm';
import { ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUserDto';
import { Credentials } from 'src/entities/Credentials.entity';
import { UserType } from 'src/entities/UserType.entity';



@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private dataSource: DataSource,
  ) {}

  /*async signIn(userLogin: LoginUserDto) {
    const userFound = await this.userRepository.findOne({
      where: { email: userLogin.email },
    });
    if (!userFound) {
      throw new BadRequestException('Credenciales incorrectas');
    }

    const isValidPassword = await bcrypt.compare(
      userLogin.password,
      userFound.password,
    );
    if (!isValidPassword) {
      throw new BadRequestException('Credenciales incorrectas');
    }

    const userPayload = {
      sub: userFound.id,
      id: userFound.id,
      email: userFound.email,
    };
    const token = this.jwtService.sign(userPayload);
    return { success: 'Inicio de sesión exitoso', token, user: userFound };
  }*/

  async createUser(createUserDto: CreateUserDto) {
    // Start a transaction
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Check if email already exists
      const existingCredentials = await queryRunner.manager
        .getRepository(Credentials)
        .findOne({ where: { email: createUserDto.email } });

      if (existingCredentials) {
        throw new ConflictException('El correo electrónico ya está registrado');
      }

      const userType = await queryRunner.manager
        .getRepository(UserType)
        .findOne({ where: { id: createUserDto.userTypeId } });

      if (!userType) {
        throw new ConflictException('Tipo de usuario no encontrado');
      }

      const user = new User();
      user.name = createUserDto.name;
      user.phone = createUserDto.phone;
      user.userType = userType;
      user.registrationDate = new Date().toISOString().split('T')[0];

      const savedUser = await queryRunner.manager.save(user);

      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

      const credentials = new Credentials();
      credentials.user = savedUser;
      credentials.email = createUserDto.email;
      credentials.password = hashedPassword;

      await queryRunner.manager.save(credentials);

      await queryRunner.commitTransaction();

      return {
        id: savedUser.id,
        name: savedUser.name,
        phone: savedUser.phone,
        email: credentials.email,
        userType: savedUser.userType.name,
        registrationDate: savedUser.registrationDate,
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
