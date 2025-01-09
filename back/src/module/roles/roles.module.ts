import { Module } from '@nestjs/common';
import { RolesService } from 'src/module/roles/roles.service';
import { RolesController } from 'src/module/roles/roles.controller';

import { RolesRepository  } from 'src/module/roles/roles.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RolesController],
  providers: [RolesService, RolesRepository],
  exports: [RolesRepository],
})
export class RolesModule {}
