import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestimonialsController } from 'src/module/testimonials/testimonials.controller';
import { TestimonialsService } from 'src/module/testimonials/testimonials.service';
import { Testimonial } from 'src/entities/Testimonial.entity';
import { User } from 'src/entities/User.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Testimonial, User])],
  controllers: [TestimonialsController],
  providers: [TestimonialsService],
})
export class TestimonialsModule {}
