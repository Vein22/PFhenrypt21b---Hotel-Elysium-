import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from 'src/module/roles/dto/create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {}
