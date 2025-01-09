import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm"
import { Reservation } from "src/entities/Reservation.entity";
import { Room } from "src/entities/Room.entity";
import { User } from "src/entities/User.entity";
import { AuthModule } from "src/module/auth/auth.module";
import { RoomsModule } from "src/module/create-room/rooms.module";
import { NotificationsService } from "src/module/notifications/notifications.service";
import { PaymentModule } from "src/module/payment/payment.module";
import { ReservationController } from "src/module/reservations/reservations.controller";
import { ReservationRepository } from "src/module/reservations/reservations.repository";
import { ReservationService } from "src/module/reservations/reservations.service";

@Module({
    imports: [TypeOrmModule.forFeature([Reservation, Room, User]), 
    AuthModule, RoomsModule, PaymentModule],
    providers: [ReservationService, ReservationRepository, NotificationsService],
    controllers: [ReservationController],
    exports: [ReservationService, ReservationRepository],
})
export class ReservationsModule {}