import { ConsoleLogger } from '@nestjs/common';
import {
  AfterInsert,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }

  @AfterRemove()
  logUpdate() {
    console.log('Updated user with id', this.id);
  }

  @AfterUpdate()
  logRemove() {
    console.log('Removed User with id', this.id);
  }
}
