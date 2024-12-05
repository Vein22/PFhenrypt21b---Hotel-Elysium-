import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
  IsUUID,
} from 'class-validator';

export class CreateUserDto {
  /**
   * Nombre del usuario.
   * @example 'John Doe'
   */
  @ApiProperty({
    example: 'John Doe',
    description: 'Nombre del usuario.'
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  /**
   * Número de teléfono del usuario.
   * @example '+1234567890'
   */
  @ApiProperty({
    example: '+1234567890',
    description: 'Número de teléfono del usuario.'
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(15)
  phone: string;

  /**
   * ID del tipo de usuario.
   * @example 'd2715a1d-32b5-4120-b0d9-9f908e13b508'
   */
  @ApiProperty({
    example: 'd2715a1d-32b5-4120-b0d9-9f908e13b508',
    description: 'ID del tipo de usuario.'
  })
  @IsUUID()
  @IsNotEmpty()
  userTypeId: string;

  /**
   * Correo electrónico del usuario.
   * @example 'user@example.com'
   */
  @ApiProperty({
    example: 'user@example.com',
    description: 'Correo electrónico del usuario.'
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * Contraseña del usuario.
   * @example 'Strong!Pass1'
   */
  @ApiProperty({
    example: 'Strong!Pass1',
    description: 'Contraseña del usuario.'
  })
  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @MinLength(8)
  @MaxLength(15)
  password: string;
}