import { Migration } from '@mikro-orm/migrations';

export class Migration20220920084105 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "test" ("id" serial primary key, "config_tests" jsonb null);');
  }

}
