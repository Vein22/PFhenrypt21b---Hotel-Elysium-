import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { NotificationsService } from '../notifications/notifications.service';
import { RolesService } from '../roles/roles.service';
import { RolesModule } from '../roles/roles.module';
import { Role } from 'src/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role]), 
  RolesModule,],
  controllers: [AuthController],
  providers: [AuthService, NotificationsService, RolesService ],
  exports: [AuthService]
})
export class AuthModule {}
