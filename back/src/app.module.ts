import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './module/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeormConfig from './config/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { FilesModule } from './module/files/files.module';
import { RoomsModule } from './module/create-room/rooms.module';
import { ReservationsModule } from './module/reservations/reservations.module';
import { UsersModule } from './module/users/users.module'; 
import { RolesModule } from './module/roles/roles.module'; 
import { PaymentModule} from './module/payment/payment.module';
import { EmployeeModule } from './module/employee/employee.module';
<<<<<<< HEAD
<<<<<<< HEAD
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
=======
=======
>>>>>>> fad83a596ab77db9444510a6ded0364e3ee35587
import { TestimonialsModule } from './module/testimonials/testimonials.module'; 
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulerModule } from './module/Scheduler/scheduler.module';
<<<<<<< HEAD
>>>>>>> 76854cd2c0e3ca0b09bfc3f24fe99e36c7b37686
=======
>>>>>>> fad83a596ab77db9444510a6ded0364e3ee35587

@Module({
  imports: [
    SchedulerModule,
    AuthModule,
    FilesModule,
    RoomsModule,
    ReservationsModule,
    UsersModule,
    RolesModule,
    PaymentModule,
<<<<<<< HEAD
<<<<<<< HEAD
    EmployeeModule,
=======
    TestimonialsModule,
>>>>>>> 76854cd2c0e3ca0b09bfc3f24fe99e36c7b37686
=======
    EmployeeModule,
    TestimonialsModule,
>>>>>>> fad83a596ab77db9444510a6ded0364e3ee35587

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