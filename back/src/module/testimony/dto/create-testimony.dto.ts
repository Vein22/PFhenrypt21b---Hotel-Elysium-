import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, MinLength, MaxLength, IsInt, Min, Max } from 'class-validator';

export class CreateTestimonyDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'Nombre del usuario.',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'Correo electrónico del usuario.',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'Excelente servicio y atención.',
    description: 'Mensaje del usuario.',
  })
  @IsString()
  @IsNotEmpty()
  mensaje: string;

  @ApiProperty({
    example: 4,
    description: 'Rating del usuario (1-5).',
  })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;
}
