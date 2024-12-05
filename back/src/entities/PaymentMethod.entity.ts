import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('payment_method')
export class PaymentMethod {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Nombre del método de pago.
   * @example 'Tarjeta de Crédito'
   */
  @ApiProperty({
    example: 'Tarjeta de Crédito',
    description: 'Nombre del método de pago.'
  })
  @Column()
  name: string;

  /**
   * Descripción del método de pago.
   * @example 'Método de pago mediante tarjetas de crédito.'
   */
  @ApiProperty({
    example: 'Método de pago mediante tarjetas de crédito.',
    description: 'Descripción del método de pago.'
  })
  @Column()
  description: string;
}
