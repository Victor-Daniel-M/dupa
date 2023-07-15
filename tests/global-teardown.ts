import { createConnection } from 'typeorm';
import { OrmConfig } from '../ormconfig';
import { models } from '../db/src/models';

async function tearDown() {
  const connection = await createConnection({ ...OrmConfig, name: 'teardown' });

  for (let index = 0; index < models.length; index++) {
    try {
      const model = models[index];
      const repostory = connection.getRepository(model);
      await repostory.delete({});
    } catch (error) {
      console.log('error:', error);
    }
  }

  await connection.close();
}

export default tearDown;
