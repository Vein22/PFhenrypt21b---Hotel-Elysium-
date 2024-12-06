import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Nombre del rol.
   * @example 'Admin'
   */
  @ApiProperty({
    example: 'Admin',
    description: 'Nombre del rol.'
  })
  @Column()
  name: string;

  /**
   * Descripción del rol.
   * @example 'Administrador con acceso completo a todas las funcionalidades.'
   */
  @ApiProperty({
    example: 'Administrador con acceso completo a todas las funcionalidades.',
    description: 'Descripción del rol.'
  })
  @Column()
  description: string;
}
