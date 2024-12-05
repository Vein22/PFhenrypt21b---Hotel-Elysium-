import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './User.entity';

@Entity('credentials')
export class Credentials {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Referencia al usuario asociado a las credenciales.
   * @example 'd2715a1d-32b5-4120-b0d9-9f908e13b508'
   */
  @ApiProperty({
    example: 'd2715a1d-32b5-4120-b0d9-9f908e13b508',
    description: 'Referencia al usuario asociado a las credenciales.'
  })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  /**
   * Correo electrónico asociado a las credenciales.
   * @example 'user@example.com'
   */
  @ApiProperty({
    example: 'user@example.com',
    description: 'Correo electrónico asociado a las credenciales.'
  })
  @Column()
  email: string;

  /**
   * Contraseña asociada a las credenciales.
   * @example 'StrongPassword123'
   */
  @ApiProperty({
    example: 'StrongPassword123',
    description: 'Contraseña asociada a las credenciales.'
  })
  @Column()
  password: string;
}
