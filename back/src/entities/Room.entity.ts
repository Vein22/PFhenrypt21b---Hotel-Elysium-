import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { RoomType } from './RoomType.entity';

@Entity('room')
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Tipo de habitación asociada.
   * @example 'd230c7d9-b983-4e78-b846-944dbe62d7b1'
   */
  @ApiProperty({
    example: 'd230c7d9-b983-4e78-b846-944dbe62d7b1',
    description: 'Tipo de habitación asociada.'
  })
  @ManyToOne(() => RoomType)
  @JoinColumn({ name: 'room_type_id' })
  roomType: RoomType;

  /**
   * Número de la habitación.
   * @example '101'
   */
  @ApiProperty({
    example: '101',
    description: 'Número de la habitación.'
  })
  @Column()
  roomNumber: string;

  /**
   * Estado actual de la habitación (Ejemplo: disponible, ocupada, en mantenimiento).
   * @example 'Disponible'
   */
  @ApiProperty({
    example: 'Disponible',
    description: 'Estado actual de la habitación (Ejemplo: disponible, ocupada, en mantenimiento).'
  })
  @Column()
  status: string;

  /**
   * Ubicación de la habitación dentro del edificio o área.
   * @example 'Piso 1, ala este'
   */
  @ApiProperty({
    example: 'Piso 1, ala este',
    description: 'Ubicación de la habitación dentro del edificio o área.'
  })
  @Column()
  location: string;

  /**
   * Estado de eliminación lógica de la habitación.
   * @example false
   */
  @ApiProperty({
    example: false,
    description: 'Estado de eliminación lógica de la habitación.'
  })
  @Column({ default: false })
  isDeleted: boolean;
}
