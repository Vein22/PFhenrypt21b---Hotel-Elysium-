import { PartialType } from '@nestjs/swagger';
import { CreateTestimonialDto } from 'src/module/testimonials/dto/create-testimonial.dto';

export class UpdateTestimonialDto extends PartialType(CreateTestimonialDto) {}
