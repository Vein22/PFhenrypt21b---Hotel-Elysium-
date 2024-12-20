import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import * as nodemailer from 'nodemailer'

@Module({
  providers: [NotificationsService, nodemailer],
  exports: [NotificationsService],
})
export class NotificationsModule {}
