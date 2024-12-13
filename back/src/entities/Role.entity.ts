import { Entity, PrimaryGeneratedColumn, Column, OneToMany  } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './User.entity';

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

   /**
   * Usuarios asociados al rol.
   */
   @OneToMany(() => User, (user) => user.role)
   users: User[];
}
