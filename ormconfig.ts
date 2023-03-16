import { TestEntity } from 'src/test_entity/domain/testEntity.entity';
import { User } from 'src/users/domain/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const OrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'dupa_test_db',
  entities: [TestEntity, User],
  synchronize: true,
};
