import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';
import { Room } from './room.entity';

@Entity({ name: 'reservations' })
export class Reservation {


  /**
   * Identificador único de la reservación.
   * @example "123e4567-e89b-12d3-a456-426614174000"
   */
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Identificador único de la reservación.',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;


  /**
   * Usuario que realiza la reservación.
   */
  @ApiProperty({
    description: 'Usuario que realiza la reservación.',
  })
  @Column()
  userId: string;


  /**
   * Habitación reservada.
   */
  @ApiProperty({
    description: 'Habitación reservada.',
  })
  @Column()
  roomId: string;

  
  /**
   * Fecha de check-in.
   * @example "2024-12-20"
   */
  @ApiProperty({
    example: '2024-12-20',
    description: 'Fecha de check-in.',
  })
  @Column('date')
  checkInDate: Date;


  /**
   * Fecha de check-out.
   * @example "2024-12-25"
   */
  @ApiProperty({
    example: '2024-12-25',
    description: 'Fecha de check-out.',
  })
  @Column('date')
  checkOutDate: Date;


   /**
   * Estado de eliminación lógica de la reservación.
   * @example false
   */
   @ApiProperty({
    example: false,
    description: 'Indica si la reservación está eliminada de forma lógica.',
  })
  @Column({ default: false })
  isDeleted: boolean;
}
