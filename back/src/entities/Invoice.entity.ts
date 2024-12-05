import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Reservation } from './Reservation.entity';
import { PaymentMethod } from './PaymentMethod.entity';

@Entity('invoice')
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Referencia a la reserva asociada a la factura.
   * @example 'd2715a1d-32b5-4120-b0d9-9f908e13b508'
   */
  @ApiProperty({
    example: 'd2715a1d-32b5-4120-b0d9-9f908e13b508',
    description: 'Referencia a la reserva asociada a la factura.'
  })
  @ManyToOne(() => Reservation)
  @JoinColumn({ name: 'reservation_id' })
  reservation: Reservation;

  /**
   * Referencia al método de pago utilizado en la factura.
   * @example 'Tarjeta de Crédito'
   */
  @ApiProperty({
    example: 'Tarjeta de Crédito',
    description: 'Referencia al método de pago utilizado en la factura.'
  })
  @ManyToOne(() => PaymentMethod)
  @JoinColumn({ name: 'payment_method_id' })
  paymentMethod: PaymentMethod;

  /**
   * Monto total de la factura.
   * @example 150.75
   */
  @ApiProperty({
    example: 150.75,
    description: 'Monto total de la factura.'
  })
  @Column('decimal')
  amount: number;

  /**
   * Fecha de emisión de la factura.
   * @example '2024-12-05'
   */
  @ApiProperty({
    example: '2024-12-05',
    description: 'Fecha de emisión de la factura.'
  })
  @Column('date')
  issueDate: string;

  /**
   * Número de la factura.
   * @example 'INV-12345'
   */
  @ApiProperty({
    example: 'INV-12345',
    description: 'Número de la factura.'
  })
  @Column()
  invoiceNumber: string;

  /**
   * Estado de la factura.
   * @example 'Pagada'
   */
  @ApiProperty({
    example: 'Pagada',
    description: 'Estado de la factura.'
  })
  @Column()
  status: string;

  /**
   * Estado de eliminación lógica de la factura.
   * @example false
   */
  @ApiProperty({
    example: false,
    description: 'Estado de eliminación lógica de la factura.'
  })
  @Column({ default: false })
  isDeleted: boolean;
}
