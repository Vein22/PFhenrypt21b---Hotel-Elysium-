import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './module/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeormConfig from './config/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { FilesModule } from './module/files/files.module';
import { RoomsModule } from './module/create-room/rooms.module';
import { NotificationsModule } from './module/notifications/notifications.module';
import { ReservationsModule } from './module/reservations/reservations.module';
import { User } from './entities/User.entity';
import { Room } from './entities/Room.entity';
import { Reservation } from './entities/Reservation.entity';
import { UsersModule } from './module/users/users.module'; 
import { RolesModule } from './module/roles/roles.module'; 
import { Role } from './entities/Role.entity';
import { PaymentModule} from './module/payment/payment.module';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { TestimonyModule } from './module/testimony/testimony.module';



@Module({
  imports: [
    AuthModule,
    FilesModule,
    RoomsModule,
    ReservationsModule,
    UsersModule,
    RolesModule,
    PaymentModule,
    TestimonyModule,
    
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1d' },
      secret: process.env.JWT_SECRET,
    }),

    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (Config: ConfigService) => Config.get('typeorm'),
    }),
  ],
 
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
