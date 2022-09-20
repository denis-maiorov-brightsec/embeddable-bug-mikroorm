import type { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { MikroORM } from '@mikro-orm/core';
import { TestEntity } from './src/entities/TestEntity';


(async () => {
  const orm = await MikroORM.init<PostgreSqlDriver>({
    entities: ['./dist/src/entities'], // path to our JS entities (dist), relative to `baseDir`
    entitiesTs: ['./src/entities'], // path to our TS entities (src), relative to `baseDir`
    dbName: 'dummy-test-db',
    password: 'password',
    user: 'postgres',
    allowGlobalContext: true,
    type: 'postgresql',
  });

  const entity = orm.em.create(TestEntity, {config: {tests: ['1', '2', '3']}});
  orm.em.persist(entity);
  await orm.em.flush();
})();
