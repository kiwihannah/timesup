import { Todo } from 'src/todos/entities/todo.entity';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('users', { schema: 'slack' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'UID' })
  uid: number;

  @Column({ type: 'varchar', name: 'EMAIL', length: 35, unique: true })
  email: string;

  @Column({ type: 'varchar', name: 'NICKNAME', length: 20 })
  nickname: string;

  @Column({ type: 'varchar', name: 'PASSWORD', length: 20 })
  password: string;

  @Column({ type: 'datetime', name: 'JOIN_DATE', default: () => 'CURRENT_TIMESTAMP' })
  joinDate: Date;

  @OneToMany(type => Todo, todos => todos.todoId, {
    cascade: false
  })
  todos: Todo[];
}
