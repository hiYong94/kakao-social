import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: '이름',
    name: 'name',
    type: 'varchar',
    length: 45,
    nullable: false,
  })
  name: string;

  @Column({
    comment: '활성상태',
    name: 'is_active',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  isActive: boolean;
}

export default User;
