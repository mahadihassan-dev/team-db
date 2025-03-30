import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team) 
    private readonly teamRepository: Repository<Team>,
  ) {}

  async create(teamData: Partial<Team>): Promise<Team> {
    const team = this.teamRepository.create(teamData);
    return this.teamRepository.save(team);
  }

  async findAll(): Promise<Team[]> {
    return this.teamRepository.find();
  }

  async findOne(id: number): Promise<Team | null> {
    return this.teamRepository.findOne({ where: { id } });
  }

  async update(id: number, teamData: Partial<Team>): Promise<Team> {
    await this.teamRepository.update(id, teamData);
    const updatedTeam = await this.findOne(id);
    
    if (!updatedTeam) {
      throw new Error(`Team with ID ${id} not found`);
    }
    
    return updatedTeam;
  }

  async delete(id: number): Promise<void> {
    await this.teamRepository.delete(id);
  }
}
