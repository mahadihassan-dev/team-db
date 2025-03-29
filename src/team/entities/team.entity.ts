import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teamName: string;

  @Column({ nullable: true })
  teamLogo: string; // Store image URL

  @Column()
  teamColor: string;
}
