import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Client } from './Client.entity';
import { Room } from './Room.entity';

@Entity('review')
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Referencia al cliente que realizó la reseña.
   * @example 'd2715a1d-32b5-4120-b0d9-9f908e13b508'
   */
  @ApiProperty({
    example: 'd2715a1d-32b5-4120-b0d9-9f908e13b508',
    description: 'Referencia al cliente que realizó la reseña.'
  })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id' })
  client: Client;

  /**
   * Referencia a la habitación sobre la cual se realizó la reseña.
   * @example 'a3b7458c-7db9-4a1e-94b4-d20e79cfe4c0'
   */
  @ApiProperty({
    example: 'a3b7458c-7db9-4a1e-94b4-d20e79cfe4c0',
    description: 'Referencia a la habitación sobre la cual se realizó la reseña.'
  })
  @ManyToOne(() => Room)
  @JoinColumn({ name: 'room_id' })
  room: Room;

  /**
   * Calificación dada en la reseña (rango de 1 a 5).
   * @example 4
   */
  @ApiProperty({
    example: 4,
    description: 'Calificación dada en la reseña (rango de 1 a 5).'
  })
  @Column('int')
  rating: number;

  /**
   * Texto de la reseña dejada por el cliente.
   * @example 'Excelente estancia, habitación limpia y cómoda.'
   */
  @ApiProperty({
    example: 'Excelente estancia, habitación limpia y cómoda.',
    description: 'Texto de la reseña dejada por el cliente.'
  })
  @Column()
  text: string;

  /**
   * Fecha en la que se dejó la reseña.
   * @example '2024-12-10'
   */
  @ApiProperty({
    example: '2024-12-10',
    description: 'Fecha en la que se dejó la reseña.'
  })
  @Column('date')
  date: string;

  /**
   * Estado de eliminación lógica de la reseña.
   * @example false
   */
  @ApiProperty({
    example: false,
    description: 'Estado de eliminación lógica de la reseña.'
  })
  @Column({ default: false })
  isDeleted: boolean;
}
