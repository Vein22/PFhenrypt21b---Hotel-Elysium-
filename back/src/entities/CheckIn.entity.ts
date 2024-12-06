import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Reservation } from './Reservation.entity';

@Entity('checkin')
export class CheckIn {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Referencia a la reserva asociada al check-in.
   * @example 'd2715a1d-32b5-4120-b0d9-9f908e13b508'
   */
  @ApiProperty({
    example: 'd2715a1d-32b5-4120-b0d9-9f908e13b508',
    description: 'Referencia a la reserva asociada al check-in.',
  })
  @ManyToOne(() => Reservation)
  @JoinColumn({ name: 'reservation_id' })
  reservation: Reservation;

  /**
   * Fecha y hora del check-in realizado.
   * @example '2024-12-05T10:30:00'
   */
  @ApiProperty({
    example: '2024-12-05T10:30:00',
    description: 'Fecha y hora del check-in realizado.',
  })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;

  /**
   * Notas adicionales relacionadas con el check-in.
   * @example 'Cliente llegó tarde debido a un retraso en su vuelo.'
   */
  @ApiProperty({
    example: 'Cliente llegó tarde debido a un retraso en su vuelo.',
    description: 'Notas adicionales relacionadas con el check-in.',
  })
  @Column()
  notes: string;
}
