import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { User } from '../users/entities/user.entity';
import { Channel } from '../channels/entities/channel.entity';
import { Dm } from '../dms/entities/dm.entity';
import { Workspace } from '../workspaces/entities/workspace.entity';

export class DatabaseService {
  constructor(private config: ConfigService) { }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    console.log(`★★★ DB CONNECTED-> ${this.config.get('DB_HOST')} ★★★`)
    return {
      type: 'mariadb',
      host: this.config.get('DB_HOST'),
      port: +this.config.get('DB_PORT'),
      username: this.config.get('DB_USERNAME'),
      password: this.config.get('DB_PASSWORD'),
      database: this.config.get('DB_NAME'),
      synchronize: this.config.get('NODE_ENV') === 'dev' ? true : false,
      logging: this.config.get('NODE_ENV') === 'dev' ? true : false,
      entities: [User, Channel, Dm, Workspace],
    };
  }
}
