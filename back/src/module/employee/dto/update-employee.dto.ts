import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeDto } from 'src/module/employee/dto/create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
