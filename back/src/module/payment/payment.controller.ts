import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import {Stripe} from 'stripe';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payments')
@Controller('payments')
export class PaymentController {

  private stripe: Stripe;


  constructor(private readonly paymentService: PaymentService) {}

@Post('/checkout')
async createCheckoutSession(@Body() createPaymentDto: CreatePaymentDto) {
  return this.paymentService.createCheckoutSession(createPaymentDto);
}

}
