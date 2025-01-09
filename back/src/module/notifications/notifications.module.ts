import { Module } from '@nestjs/common';
import { NotificationsService } from 'src/module/notifications/notifications.service';
import * as nodemailer from 'nodemailer'
import { PaymentModule } from 'src/module/payment/payment.module';

@Module({
  imports: [PaymentModule],
  providers: [NotificationsService, nodemailer],
  exports: [NotificationsService],
})
export class NotificationsModule {}
