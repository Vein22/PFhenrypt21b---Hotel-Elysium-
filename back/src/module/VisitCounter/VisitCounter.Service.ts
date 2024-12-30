import { Injectable } from '@nestjs/common';
import { VisitCounterRepository } from './VisitCounterRepository';

@Injectable()
export class VisitCounterService {
  constructor(private readonly visitCounterRepository: VisitCounterRepository) {}


  async getAllVisits() {
    return await this.visitCounterRepository.find();
  }
  async incrementVisitCount(): Promise<number> {
    return this.visitCounterRepository.incrementVisitCount();
  }
  async storeVisitIp(ip: string): Promise<void> {
    const existingVisit = await this.visitCounterRepository.findOne({
      where: { ip },
    });

    const now = new Date();
    if (
      !existingVisit ||
      now.getTime() - existingVisit.timestamp.getTime() > 24 * 60 * 60 * 1000
    ) {
      await this.visitCounterRepository.save({
        ip,
        timestamp: now,
      });
      await this.incrementVisitCount();
    }
  }

  async getTotalVisitCount(): Promise<number> {
    return this.visitCounterRepository.getTotalVisitCount();
  }

}
