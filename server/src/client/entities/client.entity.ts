// client.entity.ts
// import { Demande } from 'src/demande/entities/demande.entity';
import { Demande } from 'src/demande/entities/demande.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  adresse: string;

  @Column()
  num_tel: string;

//   //  la relation OneToMany avec l'entité Demande
  @OneToMany(() => Demande, demande => demande.client)
  demandes: Demande[];

// @ManyToOne(() => User, (user) => user.clients)
// user: User;

}
