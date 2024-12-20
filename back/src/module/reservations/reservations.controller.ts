import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservations.dto';
import { ApiTags } from "@nestjs/swagger";
import { ReservationService } from './reservations.service';


@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}
  @ApiTags('Reservations')



  @Post()
  async createReservation(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.createReservation(createReservationDto);
  }

  @Get()
  async getReservations(@Query('page') page: number=1, @Query('limit') limit: number=5) {
      return this.reservationService.getReservations(page, limit);
  }


  @Delete(':id')
  async deleteReservationById(@Param('id') id: string) {
     return this.reservationService.deleteReservationById(id);
  }
}