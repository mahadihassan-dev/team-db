import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { Team } from './entities/team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team])], // Ensure it's here
  providers: [TeamService],
  controllers: [TeamController],
  exports: [TeamService],
})
export class TeamModule {}
