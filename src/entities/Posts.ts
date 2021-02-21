import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
// each corresponds a column in the table
@Entity()
export class Post {
  @PrimaryKey()
  id!: string;

  @Property()
  createdAt = new Date(); 

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  title!: string;
}
