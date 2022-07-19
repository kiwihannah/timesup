import { DatabaseService } from './database/database.service';
import { ConfigService } from '@nestjs/config';
import fs = require('fs');
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env.prod') });

const configData = JSON.stringify(
  new DatabaseService(new ConfigService()).getTypeOrmConfig(),
  null,
  2,
);
fs.writeFile('ormconfig.json', configData, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('⭐️⭐️⭐️ tyeporm 짱짱맨 ⭐️⭐️⭐️');
});
