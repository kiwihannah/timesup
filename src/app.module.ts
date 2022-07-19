import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ChannelsModule } from './channels/channels.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { DmsModule } from './dms/dms.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { DataSource } from 'typeorm';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    UsersModule,
    ChannelsModule,
    WorkspacesModule,
    DmsModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(
      new DatabaseService(new ConfigService()).getTypeOrmConfig(),
    ),
    TodosModule,
  ],
  controllers: [AppController, DatabaseController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('combined'),
    },
    DatabaseService,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
