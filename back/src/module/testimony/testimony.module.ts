import { Module } from '@nestjs/common';
import { TestimonyController } from './testimony.controller';
import { TestimonysService } from './testimony.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testimony } from 'src/entities/testimony.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Testimony])],
  controllers: [TestimonyController],  // El controlador debe estar aquí
  providers: [TestimonysService],      // El servicio debe estar aquí
})
export class TestimonyModule {}
