import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
} from "typeorm";

@ObjectType()
@Entity()
export class Course_Semesters extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  course_id!: number;

  @Field()
  @Column()
  semester_id!: number;


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