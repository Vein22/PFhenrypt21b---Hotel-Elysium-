import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Client } from './Client.entity';
import { Room } from './Room.entity';

@Entity('reservation')
export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Referencia al cliente que realizó la reserva.
   * @example 'd2715a1d-32b5-4120-b0d9-9f908e13b508'
   */
  @ApiProperty({
    example: 'd2715a1d-32b5-4120-b0d9-9f908e13b508',
    description: 'Referencia al cliente que realizó la reserva.'
  })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id' })
  client: Client;

  /**
   * Referencia a la habitación reservada.
   * @example 'a3b7458c-7db9-4a1e-94b4-d20e79cfe4c0'
   */
  @ApiProperty({
    example: 'a3b7458c-7db9-4a1e-94b4-d20e79cfe4c0',
    description: 'Referencia a la habitación reservada.'
  })
  @ManyToOne(() => Room)
  @JoinColumn({ name: 'room_id' })
  room: Room;

  /**
   * Fecha de entrada de la reserva.
   * @example '2024-12-10'
   */
  @ApiProperty({
    example: '2024-12-10',
    description: 'Fecha de entrada de la reserva.'
  })
  @Column('date')
  checkInDate: string;

  /**
   * Fecha de salida de la reserva.
   * @example '2024-12-15'
   */
  @ApiProperty({
    example: '2024-12-15',
    description: 'Fecha de salida de la reserva.'
  })
  @Column('date')
  checkOutDate: string;

  /**
   * Estado de la reserva.
   * @example 'Confirmada'
   */
  @ApiProperty({
    example: 'Confirmada',
    description: 'Estado de la reserva.'
  })
  @Column()
  reservationStatus: string;

  /**
   * Monto total de la reserva.
   * @example 500.00
   */
  @ApiProperty({
    example: 500.00,
    description: 'Monto total de la reserva.'
  })
  @Column('decimal')
  total: number;

  /**
   * Estado de eliminación lógica de la reserva.
   * @example false
   */
  @ApiProperty({
    example: false,
    description: 'Estado de eliminación lógica de la reserva.'
  })
  @Column({ default: false })
  isDeleted: boolean;
}
