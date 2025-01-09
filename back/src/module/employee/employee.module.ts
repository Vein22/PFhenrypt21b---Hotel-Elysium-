import { Module } from '@nestjs/common';
import { EmployeeService } from 'src/module/employee/employee.service';
import { EmployeeController } from 'src/module/employee/employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/entities/employee.entity';
import { Role } from 'src/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Role])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
