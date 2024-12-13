import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from 'src/entities/Reservation.entity';
import { Repository, Between } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservations.dto';

@Injectable()
export class ReservationRepository {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
  ) {}

  async createReservation(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const { userId, roomId, checkInDate, checkOutDate } = createReservationDto;

    const reservation = new Reservation();
    reservation.userId = userId; 
    reservation.roomId = roomId; 
    reservation.checkInDate = checkInDate;
    reservation.checkOutDate = checkOutDate;

    return this.reservationRepository.save(reservation);
  }


  async getReservations(page: number, limit: number): Promise<Reservation[]> {
    return this.reservationRepository.find({
      take: limit,
      skip: (page - 1) * limit,
    });
  }


  async deleteReservationById(id: string): Promise<{id:string}> {
    await this.reservationRepository.delete(id);
    return { id };
  }

  async findOverlappingReservation(createReservationDto: CreateReservationDto): Promise<Reservation | null> {
    const { userId, roomId, checkInDate, checkOutDate } = createReservationDto;
    return this.reservationRepository.findOne({
      where: [
        {
          userId,
          roomId,
          checkInDate: Between(checkInDate, checkOutDate),
        },
        {
          userId,
          roomId,
          checkOutDate: Between(checkInDate, checkOutDate),
        },
      ],
    });
  }
}