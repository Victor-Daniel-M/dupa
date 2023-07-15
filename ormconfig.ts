import { models } from './db/src/models';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const OrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: '192.168.43.62',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'dupa_test_db',
  entities: models,
  synchronize: true,
};
