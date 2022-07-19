import { User } from "src/users/entities/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('todos', { schema: 'slack' })
export class Todo extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'TODO_ID' })
    todoId: number;

    @Column({ type: 'varchar', name: 'CONTENT', length: 300 })
    content: string;

    @Column({ type: 'char', length: 2, name: 'COMP_YN' })
    compYn: string;

    @Column({ type: 'datetime', name: 'INS_DATE', default: () => 'CURRENT_TIMESTAMP' })
    insDate: Date;

    @ManyToOne(type => User, users => users.uid, {
        cascade: true
    })
    users: User[];
}
