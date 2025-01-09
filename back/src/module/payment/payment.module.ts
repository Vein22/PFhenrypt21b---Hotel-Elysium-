import { Module } from '@nestjs/common';
import { PaymentService } from 'src/module/payment/payment.service';
import { PaymentController } from 'src/module/payment/payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationRepository } from 'src/module/reservations/reservations.repository';
import { Reservation } from 'src/entities/Reservation.entity';
import { User } from 'src/entities/User.entity';
import { Room } from 'src/entities/Room.entity';
import { NotificationsService } from 'src/module/notifications/notifications.service';


@Module({
  imports: [TypeOrmModule.forFeature([Reservation, User, Room])],
  controllers: [PaymentController],
  providers: [PaymentService, ReservationRepository, NotificationsService],
})
export class PaymentModule {}
