import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitCounter } from 'src/entities/VisitCounter.entity';
import { VisitCounterController } from 'src/module/VisitCounter/VisitCounter.Controller';
import { VisitCounterService } from 'src/module/VisitCounter/VisitCounter.Service';
import { VisitCounterRepository } from 'src/module/VisitCounter/VisitCounterRepository';

@Module({
  imports: [TypeOrmModule.forFeature([VisitCounter])],
  controllers: [VisitCounterController],
  providers: [VisitCounterService, VisitCounterRepository],
})
export class VisitCounterModule {}
