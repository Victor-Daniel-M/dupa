import { models } from './db/src/models';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

let OrmConfig: PostgresConnectionOptions;

if (process.env.NODE_ENV == 'production') {
  OrmConfig = {
    // Production
    type: 'postgres',
    host: 'realtify-db.cfaoijt803zv.eu-west-1.rds.amazonaws.com',
    port: 5432,
    username: 'postgres',
    password: 'Q8g5BpjQt9FCSLatY0Cb',
    database: 'super_app_test',
    entities: models,
    synchronize: true,
    namingStrategy: undefined,
  };
} else {
  OrmConfig = {
    // Test
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'super_app_local_db',
    entities: models,
    synchronize: true,
  };
}

export { OrmConfig };
