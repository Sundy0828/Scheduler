import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity
} from "typeorm";

@ObjectType()
@Entity()
export class UserTypeCapabilites extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  user_type_id!: number;

  @Field()
  @Column()
  capability_id!: number;


// Should add these
//   @Field()
//   @Column()
//   creatorId: number;

//   @Field(() => String)
//   @CreateDateColumn()
//   createdAt: Date;

//   @Field(() => String)
//   @UpdateDateColumn()
//   updatedAt: Date;
}
