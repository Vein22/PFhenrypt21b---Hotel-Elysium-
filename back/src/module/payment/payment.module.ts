import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { ReservationsModule } from '../reservations/reservations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationRepository } from '../reservations/reservations.repository';
import { Reservation } from 'src/entities/Reservation.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Reservation])],
  controllers: [PaymentController],
  providers: [PaymentService, ReservationRepository],
})
export class PaymentModule {}
