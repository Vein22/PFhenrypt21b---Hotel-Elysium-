import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/module/users/users.controller';
import { UsersService } from 'src/module/users/users.service';
import { User } from 'src/entities/User.entity';
import { Testimonial } from 'src/entities/Testimonial.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User, Testimonial])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Exporta el servicio de usuarios
})
export class UsersModule {}
