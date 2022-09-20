import { Embeddable, JsonType, Property } from '@mikro-orm/core';

@Embeddable()
export class ConfigEntity {
  @Property({
    columnType: 'jsonb',
    type: JsonType,
    nullable: true
  })
  public tests?: string[];
}