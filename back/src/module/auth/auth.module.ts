import { Module } from '@nestjs/common';
import { AuthService } from 'src/module/auth/auth.service';
import { AuthController } from 'src/module/auth/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { NotificationsService } from 'src/module/notifications/notifications.service';
import { RolesService } from 'src/module/roles/roles.service';
import { RolesModule } from 'src/module/roles/roles.module';
import { Role } from 'src/entities/role.entity';
import { UsersModule } from 'src/module/users/users.module'; //// GOOGLE LOGIN

@Module({
  imports: [TypeOrmModule.forFeature([User, Role]),RolesModule, UsersModule], //// GOOGLE LOGIN UsersModule
  controllers: [AuthController],
  providers: [AuthService, NotificationsService, RolesService, UsersModule ],
  exports: [AuthService]
})
export class AuthModule {}
