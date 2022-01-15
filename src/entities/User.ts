import { Column, DeleteDateColumn, Entity } from 'typeorm';
import { BaseEntityClass } from './BaseEntityClass';

@Entity('users')
class User extends BaseEntityClass {
  @Column({
    name: 'nick_name',
    type: 'varchar',
    length: 30,
  })
  nickName: string;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    precision: 0,
    comment: '삭제일(soft)',
  })
  deletedAt: Date | null;
}

export default User;
