import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './User.entity';
import { Role } from './Role.entity';

@Entity('employee')
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Referencia al usuario asociado al empleado.
   * @example 'd2715a1d-32b5-4120-b0d9-9f908e13b508'
   */
  @ApiProperty({
    example: 'd2715a1d-32b5-4120-b0d9-9f908e13b508',
    description: 'Referencia al usuario asociado al empleado.'
  })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  /**
   * Referencia al rol asignado al empleado.
   * @example 'admin'
   */
  @ApiProperty({
    example: 'admin',
    description: 'Referencia al rol asignado al empleado.'
  })
  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  /**
   * Primer nombre del empleado.
   * @example 'John'
   */
  @ApiProperty({
    example: 'John',
    description: 'Primer nombre del empleado.'
  })
  @Column()
  firstName: string;

  /**
   * Apellido del empleado.
   * @example 'Doe'
   */
  @ApiProperty({
    example: 'Doe',
    description: 'Apellido del empleado.'
  })
  @Column()
  lastName: string;

  /**
   * Documento de identificación del empleado.
   * @example '1234567890'
   */
  @ApiProperty({
    example: '1234567890',
    description: 'Documento de identificación del empleado.'
  })
  @Column()
  identificationDocument: string;

  /**
   * Correo electrónico corporativo del empleado.
   * @example 'john.doe@company.com'
   */
  @ApiProperty({
    example: 'john.doe@company.com',
    description: 'Correo electrónico corporativo del empleado.'
  })
  @Column()
  corporateEmail: string;

  /**
   * Fecha de contratación del empleado.
   * @example '2024-01-01'
   */
  @ApiProperty({
    example: '2024-01-01',
    description: 'Fecha de contratación del empleado.'
  })
  @Column('date')
  hireDate: string;

  /**
   * Estado de eliminación lógica del empleado.
   * @example false
   */
  @ApiProperty({
    example: false,
    description: 'Estado de eliminación lógica del empleado.'
  })
  @Column({ default: false })
  isDeleted: boolean;
}
