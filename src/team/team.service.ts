import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  create(team: Partial<Team>) {
    return this.teamRepository.save(team);
  }

  findAll() {
    return this.teamRepository.find();
  }

  findOne(id: number) {
    return this.teamRepository.findOne({ where: { id } });
  }

  update(id: number, team: Partial<Team>) {
    return this.teamRepository.update(id, team);
  }

  delete(id: number) {
    return this.teamRepository.delete(id);
  }
}
