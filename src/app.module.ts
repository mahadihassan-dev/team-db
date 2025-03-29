import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TeamController } from './team/team.controller';
import { TeamService } from './team/team.service';
import { TeamModule } from './team/team.module';
import { DatabaseModule } from './database/database.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [AuthModule, TeamModule, DatabaseModule],
  controllers: [AppController, TeamController],
  providers: [AppService, TeamService],
})
export class AppModule {}
