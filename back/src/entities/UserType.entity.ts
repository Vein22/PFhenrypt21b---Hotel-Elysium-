import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('user_type')
export class UserType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Nombre del tipo de usuario.
   * @example 'admin'
   */
  @ApiProperty({
    example: 'admin',
    description: 'Nombre del tipo de usuario.'
  })
  @Column()
  name: string;

  /**
   * Descripción del tipo de usuario.
   * @example 'Usuario con privilegios administrativos.'
   */
  @ApiProperty({
    example: 'Usuario con privilegios administrativos.',
    description: 'Descripción del tipo de usuario.'
  })
  @Column()
  description: string;
}
