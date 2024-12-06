import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Reservation } from './Reservation.entity';

@Entity('checkout')
export class CheckOut {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Referencia a la reserva asociada al check-out.
   * @example 'd2715a1d-32b5-4120-b0d9-9f908e13b508'
   */
  @ApiProperty({
    example: 'd2715a1d-32b5-4120-b0d9-9f908e13b508',
    description: 'Referencia a la reserva asociada al check-out.',
  })
  @ManyToOne(() => Reservation)
  @JoinColumn({ name: 'reservation_id' })
  reservation: Reservation;

  /**
   * Fecha y hora del check-out realizado.
   * @example '2024-12-05T12:00:00'
   */
  @ApiProperty({
    example: '2024-12-05T12:00:00',
    description: 'Fecha y hora del check-out realizado.',
  })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;

  /**
   * Notas adicionales relacionadas con el check-out.
   * @example 'El cliente abandonó la habitación sin incidentes.'
   */
  @ApiProperty({
    example: 'El cliente abandonó la habitación sin incidentes.',
    description: 'Notas adicionales relacionadas con el check-out.',
  })
  @Column()
  notes: string;

  /**
   * Cargos adicionales asociados al check-out.
   * @example 15.75
   */
  @ApiProperty({
    example: 15.75,
    description: 'Cargos adicionales asociados al check-out.',
  })
  @Column('decimal')
  additionalCharges: number;
}
