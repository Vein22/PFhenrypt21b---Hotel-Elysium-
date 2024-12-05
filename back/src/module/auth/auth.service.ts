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
    private readonly credentialsRepository: Repository<Credentials>,
    private readonly userTypeRepository: Repository<UserType>,
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
      const existingCredentials = await this.credentialsRepository.findOne({
          where: { email: createUserDto.email },
      });
  
      if (existingCredentials) {
          throw new ConflictException('El correo electrónico ya está registrado');
      }
  
      const userType = await this.userTypeRepository.findOne({
          where: { id: createUserDto.userTypeId },
      });
  
      if (!userType) {
          throw new ConflictException('Tipo de usuario no encontrado');
      }
  
      const user = this.userRepository.create({
          name: createUserDto.name,
          phone: createUserDto.phone,
          userType,
          registrationDate: new Date().toISOString().split('T')[0], 
      });
  
      const savedUser = await this.userRepository.save(user);
  
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
  
      const credentials = this.credentialsRepository.create({
          user: { id: savedUser.id },  
          email: createUserDto.email,
          password: hashedPassword,
      });
  
      await this.credentialsRepository.save(credentials);
  
      return {
          id: savedUser.id,
          name: savedUser.name,
          phone: savedUser.phone,
          email: credentials.email,
          userType: savedUser.userType.name,
          registrationDate: savedUser.registrationDate,
      };
  }
  
  
  
}
