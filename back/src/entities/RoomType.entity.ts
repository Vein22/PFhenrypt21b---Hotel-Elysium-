import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('room_type')
export class RoomType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Nombre del tipo de habitación.
   * @example 'Suite'
   */
  @ApiProperty({
    example: 'Suite',
    description: 'Nombre del tipo de habitación.'
  })
  @Column()
  name: string;

  /**
   * Precio base del tipo de habitación.
   * @example 150.00
   */
  @ApiProperty({
    example: 150.00,
    description: 'Precio base del tipo de habitación.'
  })
  @Column('decimal')
  basePrice: number;

  /**
   * Capacidad máxima de ocupantes para el tipo de habitación.
   * @example 4
   */
  @ApiProperty({
    example: 4,
    description: 'Capacidad máxima de ocupantes para el tipo de habitación.'
  })
  @Column('int')
  maxCapacity: number;

  /**
   * Descripción del tipo de habitación.
   * @example 'Habitación espaciosa con cama king-size y vista al mar.'
   */
  @ApiProperty({
    example: 'Habitación espaciosa con cama king-size y vista al mar.',
    description: 'Descripción del tipo de habitación.'
  })
  @Column()
  description: string;

  /**
   * Estado de eliminación lógica del tipo de habitación.
   * @example false
   */
  @ApiProperty({
    example: false,
    description: 'Estado de eliminación lógica del tipo de habitación.'
  })
  @Column({ default: false })
  isDeleted: boolean;
}
