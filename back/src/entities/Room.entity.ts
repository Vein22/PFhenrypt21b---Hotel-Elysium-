import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('room')
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  title: string;

  @Column()
  size: string;

  @Column()
  beds: number;

  @Column({ type: 'float' })
  rating: number;

  @Column()
  image: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'text' })
  description: string;

  /**
   * Tipo de habitación asociada.
   * @example 'd230c7d9-b983-4e78-b846-944dbe62d7b1'
   */
  @ApiProperty({
    example: 'd230c7d9-b983-4e78-b846-944dbe62d7b1',
    description: 'Tipo de habitación asociada.'
  })
  @Column()
  roomType: string;

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
