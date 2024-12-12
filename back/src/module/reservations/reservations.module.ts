import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm"
import { Reservation } from "src/entities/Reservation.entity";
import { Room } from "src/entities/Room.entity";
import { AuthModule } from "../auth/auth.module";
import { RoomsModule } from "../create-room/rooms.module";
import { ReservationController } from "./reservations.controller";
import { ReservationRepository } from "./reservations.repository";
import { ReservationService } from "./reservations.service";

@Module({
    imports: [TypeOrmModule.forFeature([Reservation, Room]), AuthModule, RoomsModule],
    providers: [ReservationService, ReservationRepository],
    controllers: [ReservationController],
    exports: [ReservationService, ReservationRepository],
})
export class ReservationsModule {}