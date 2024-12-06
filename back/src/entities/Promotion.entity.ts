import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('promotion')
export class Promotion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Código único de la promoción.
   * @example 'PROMO2024'
   */
  @ApiProperty({
    example: 'PROMO2024',
    description: 'Código único de la promoción.'
  })
  @Column()
  code: string;

  /**
   * Descripción de la promoción.
   * @example 'Descuento del 20% en todos los productos.'
   */
  @ApiProperty({
    example: 'Descuento del 20% en todos los productos.',
    description: 'Descripción de la promoción.'
  })
  @Column()
  description: string;

  /**
   * Porcentaje de descuento otorgado por la promoción.
   * @example 20.5
   */
  @ApiProperty({
    example: 20.5,
    description: 'Porcentaje de descuento otorgado por la promoción.'
  })
  @Column('decimal')
  discount: number;

  /**
   * Fecha de inicio de la promoción.
   * @example '2024-12-01'
   */
  @ApiProperty({
    example: '2024-12-01',
    description: 'Fecha de inicio de la promoción.'
  })
  @Column('date')
  startDate: string;

  /**
   * Fecha de finalización de la promoción.
   * @example '2024-12-31'
   */
  @ApiProperty({
    example: '2024-12-31',
    description: 'Fecha de finalización de la promoción.'
  })
  @Column('date')
  endDate: string;

  /**
   * Estado de eliminación lógica de la promoción.
   * @example false
   */
  @ApiProperty({
    example: false,
    description: 'Estado de eliminación lógica de la promoción.'
  })
  @Column({ default: false })
  isDeleted: boolean;
}
