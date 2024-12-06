import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UserType } from './UserType.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Tipo de usuario asociado.
   * @example 'admin'
   */
  @ApiProperty({
    example: 'admin',
    description: 'Tipo de usuario asociado.'
  })
  @ManyToOne(() => UserType)
  @JoinColumn({ name: 'user_type_id' })
  userType: UserType;

  /**
   * Nombre del usuario.
   * @example 'John Doe'
   */
  @ApiProperty({
    example: 'John Doe',
    description: 'Nombre del usuario.'
  })
  @Column()
  name: string;

  /**
   * Número de teléfono del usuario.
   * @example '+1234567890'
   */
  @ApiProperty({
    example: '+1234567890',
    description: 'Número de teléfono del usuario.'
  })
  @Column()
  phone: string;

  /**
   * Fecha de registro del usuario.
   * @example '2024-12-05'
   */
  @ApiProperty({
    example: '2024-12-05',
    description: 'Fecha de registro del usuario.'
  })
  @Column('date')
  registrationDate: string;
}
