import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor() {
    const stripeKey = process.env.STRIPE_KEY;
    if (!stripeKey) {
      throw new Error('Stripe key is not defined in environment variables');
    }
    this.stripe = new Stripe(stripeKey);  }

  async createCheckoutSession(createPaymentDto: CreatePaymentDto) {
    const { amount, currency, description } = createPaymentDto;
  
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: description || 'Payment',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });
  
    return {
      url: session.url,
    };
  }
  
}
