import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EmployeeService } from 'src/module/employee/employee.service';
import { CreateEmployeeDto } from 'src/module/employee/dto/create-employee.dto';
import { UpdateEmployeeDto } from 'src/module/employee/dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployee: CreateEmployeeDto) {
    return this.employeeService.create(createEmployee);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @Put(':id')
  update(@Body() updateEmployee: UpdateEmployeeDto) {
    return this.employeeService.update(updateEmployee);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
