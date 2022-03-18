import { ConsoleLogger } from '@nestjs/common';
import { Report } from '../reports/report.entity';
import {
  AfterInsert,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterRemove,
  AfterUpdate,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true }) //temporarily true
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

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
