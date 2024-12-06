import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './User.entity';
import { Role } from './Role.entity';

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Referencia al usuario asociado al cliente.
   * @example 'd2715a1d-32b5-4120-b0d9-9f908e13b508'
   */
  @ApiProperty({
    example: 'd2715a1d-32b5-4120-b0d9-9f908e13b508',
    description: 'Referencia al usuario asociado al cliente.'
  })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  /**
   * Referencia al rol asignado al cliente.
   * @example 'admin'
   */
  @ApiProperty({
    example: 'admin',
    description: 'Referencia al rol asignado al cliente.'
  })
  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  /**
   * Documento de identificación del cliente.
   * @example '1234567890'
   */
  @ApiProperty({
    example: '1234567890',
    description: 'Documento de identificación del cliente.'
  })
  @Column()
  identificationDocument: string;

  /**
   * Dirección de domicilio del cliente.
   * @example 'Av. Siempre Viva 123'
   */
  @ApiProperty({
    example: 'Av. Siempre Viva 123',
    description: 'Dirección de domicilio del cliente.'
  })
  @Column()
  address: string;

  /**
   * País de residencia del cliente.
   * @example 'Argentina'
   */
  @ApiProperty({
    example: 'Argentina',
    description: 'País de residencia del cliente.'
  })
  @Column()
  country: string;

  /**
   * Estado de eliminación lógica del cliente.
   * @example false
   */
  @ApiProperty({
    example: false,
    description: 'Estado de eliminación lógica del cliente.'
  })
  @Column({ default: false })
  isDeleted: boolean;
}
