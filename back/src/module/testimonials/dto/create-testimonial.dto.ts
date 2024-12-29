import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class CreateTestimonialDto {
  @ApiProperty({ description: 'Contenido del testimonio', example: 'This app is amazing!' })
  @IsString()
  @MaxLength(50)
  message: string;
}
