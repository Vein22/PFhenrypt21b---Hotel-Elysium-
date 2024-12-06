import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { Credentials } from 'src/entities/Credentials.entity';
import { UserType } from 'src/entities/UserType.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User, Credentials, UserType])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}