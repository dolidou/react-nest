import { Todo } from 'src/todo/entities/todo.entity';
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Client } from 'src/client/entities/client.entity';
import { Fournisseur } from 'src/fournisseur/entities/fournisseur.entity';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  // one user can have multipe todos
  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
  // @OneToMany(() => Client, (client) => client.user)
  //  clients: Client[];

  @OneToMany(() => Fournisseur, (fournisseur) => fournisseur.user)
  fournisseur: Fournisseur[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
