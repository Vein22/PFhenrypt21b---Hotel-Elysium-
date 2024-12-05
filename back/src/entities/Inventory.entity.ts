import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Room } from './Room.entity';

@Entity('inventory')
export class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Referencia a la habitación asociada al inventario.
   * @example 'd2715a1d-32b5-4120-b0d9-9f908e13b508'
   */
  @ApiProperty({
    example: 'd2715a1d-32b5-4120-b0d9-9f908e13b508',
    description: 'Referencia a la habitación asociada al inventario.'
  })
  @ManyToOne(() => Room)
  @JoinColumn({ name: 'room_id' })
  room: Room;

  /**
   * Nombre del artículo en el inventario.
   * @example 'Toalla'
   */
  @ApiProperty({
    example: 'Toalla',
    description: 'Nombre del artículo en el inventario.'
  })
  @Column()
  item: string;

  /**
   * Cantidad disponible del artículo.
   * @example 10
   */
  @ApiProperty({
    example: 10,
    description: 'Cantidad disponible del artículo.'
  })
  @Column('int')
  quantity: number;

  /**
   * Estado del artículo en el inventario.
   * @example 'Disponible'
   */
  @ApiProperty({
    example: 'Disponible',
    description: 'Estado del artículo en el inventario.'
  })
  @Column()
  status: string;

  /**
   * Estado de eliminación lógica del inventario.
   * @example false
   */
  @ApiProperty({
    example: false,
    description: 'Estado de eliminación lógica del inventario.'
  })
  @Column({ default: false })
  isDeleted: boolean;
}
