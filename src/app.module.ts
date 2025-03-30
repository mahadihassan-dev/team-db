import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TeamModule } from './team/team.module';
import { TeamController } from './team/team.controller';
import { TeamService } from './team/team.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Make ConfigModule global
    AuthModule,
    TeamModule,
    DatabaseModule,
  ],
  controllers: [AppController, TeamController],
  providers: [AppService, TeamService],
})


export class AppModule {}
