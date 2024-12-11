import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUserDto';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly notificationService: NotificationsService
  ) {}

  async signIn(userLogin: LoginUserDto) {
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
  }

  async createUser(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: [{ email: createUserDto.email }, { dni: createUserDto.dni }],
    });

    if (existingUser) {
      throw new ConflictException('El correo electrónico ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const newUser = this.userRepository.create({
      name: createUserDto.name,
      phone: createUserDto.phone,
      email: createUserDto.email,
      password: hashedPassword,
      dni: createUserDto.dni,
      registrationDate: new Date().toISOString().split('T')[0],
      isAdmin: false,
    });

    const savedUser = await this.userRepository.save(newUser);

    try {
      await this.notificationService.sendWelcomeEmail(savedUser.email, savedUser.name);
    } catch (error) {
      console.error('Error enviando el correo de bienvenida:', error);
    }

    return {
      id: savedUser.id,
      name: savedUser.name,
      phone: savedUser.phone,
      email: savedUser.email,
      dni: createUserDto.dni,
      registrationDate: savedUser.registrationDate,
      isAdmin: savedUser.isAdmin,
    };
  }
  
}
