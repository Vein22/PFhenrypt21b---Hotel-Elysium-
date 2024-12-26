// import { Injectable } from '@nestjs/common';
// import { DataSource, Repository } from 'typeorm';
// import { VisitCounter } from 'src/entities/VisitCounter.entity';

// @Injectable()
// export class VisitCounterRepository extends Repository<VisitCounter> {
//   constructor(private readonly dataSource: DataSource) {
//     super(VisitCounter, dataSource.createEntityManager());
//   }

//   // Método para obtener el contador de visitas
//   async getVisitCount(): Promise<number> {
//     const visit = await this.findOne({ where: {} });
//     return visit ? visit.count : 0;
//   }


//   async incrementVisitCount(): Promise<number> {
//     const visit = await this.findOne({ where: {} });
    
//     if (!visit) {
//       const newVisit = this.create({ count: 1 });
//       await this.save(newVisit);
//       return newVisit.count; 
//     }
//     visit.count++;
//     await this.save(visit);
//     return visit.count; 
//   }
  


//   async hasVisitedInLast24Hours(ip: string): Promise<boolean> {
//     const now = new Date().getTime(); 
//     console.log('Hora actual:', new Date(now).toISOString());
  
//     const lastVisit = await this.findOne({
//       where: { ip },
//       order: { timestamp: 'DESC' },
//     });


//     if (lastVisit) {
//       const lastVisitTimestamp = new Date(lastVisit.timestamp).getTime();
//       console.log('Última visita:', new Date(lastVisitTimestamp).toISOString()); 
//       const timeSinceLastVisit = now - lastVisitTimestamp; 
//       console.log('Tiempo desde la última visita en milisegundos:', timeSinceLastVisit); 
//       return timeSinceLastVisit < 24 * 60 * 60 * 1000;
//     }
//     console.log('No se encontró una visita previa.');
//     return false;
//   }
  

//  async storeVisitIp(ip: string): Promise<void> {
//   const hasVisited = await this.hasVisitedInLast24Hours(ip);
//   if (!hasVisited) {
//     console.log('Insertando IP:', ip);
//     await this.save({
//       ip, 
//       timestamp: new Date(), 
//       count: 1, 
//     });

//     await this.incrementVisitCount();
//   } else {
//     console.log('La IP ya ha visitado recientemente.');
//   }
// }


// }


import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { VisitCounter } from 'src/entities/VisitCounter.entity';

@Injectable()
export class VisitCounterRepository extends Repository<VisitCounter> {
  constructor(private readonly dataSource: DataSource) {
    super(VisitCounter, dataSource.createEntityManager());
  }

  async getVisitCount(): Promise<number> {
    const visit = await this.findOne({ where: {} });
    return visit ? visit.count : 0;
  }

  async getTotalVisitCount(): Promise<number> {
    const result = await this.createQueryBuilder('visit_counter')
      .select('SUM(visit_counter.count)', 'total')
      .getRawOne();
    return Number(result.total) || 0;
  }

  async incrementVisitCount(): Promise<number> {
    console.log('IncrementVisitCount llamado');
    
    let visit = await this.findOne({ where: {} });
  
    if (!visit) {
      visit = this.create({ count: 1 });
    } else {
      visit.count=1;
    }
  
    await this.save(visit);
  
    console.log(`Nuevo valor del contador: ${visit.count}`);
    return visit.count;
  }
  
  async hasVisitedInLast24Hours(ip: string): Promise<boolean> {
    const now = Date.now(); 

    const lastVisit = await this.findOne({
      where: { ip },
      order: { timestamp: 'DESC' },
    });

    if (lastVisit) {
      const lastVisitTimestamp = new Date(lastVisit.timestamp).getTime();
      const timeSinceLastVisit = now - lastVisitTimestamp;
      return timeSinceLastVisit < 24 * 60 * 60 * 1000;
    }

    return false;
  }

  async storeVisitIp(ip: string): Promise<void> {
    const hasVisited = await this.hasVisitedInLast24Hours(ip);

    if (!hasVisited) {
      console.log(`Registrando nueva visita para IP: ${ip}`);
      await this.save({
        ip,
        timestamp: new Date(),
        count: 1,
      });
      await this.incrementVisitCount();
    } else {
      console.log(`La IP ${ip} ya visitó en las últimas 24 horas.`);
    }
  }
}
