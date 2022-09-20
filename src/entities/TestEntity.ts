import { Embedded, Entity, PrimaryKey } from '@mikro-orm/core';
import { ConfigEntity } from './ConfigEntity';

@Entity({ tableName: 'test' })
export class TestEntity {
  @PrimaryKey()
  public id: number;

  @Embedded({ entity: () => ConfigEntity })
  public config: ConfigEntity;
}