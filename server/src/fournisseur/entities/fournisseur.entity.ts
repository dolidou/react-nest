import ArticleFournisseur from 'src/article-fournisseur/entities/article-fournisseur.entity';
import { Demande } from 'src/demande/entities/demande.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Fournisseur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  nom: string;

  @Column()
  adresse: string;

  @Column()
  num_tel: string;

  @Column()
  rc: string;

  @Column()
  ai: string;

  @Column()
  nif: string;



  @ManyToOne(() => User, user => user.fournisseur)
  user: User;


//   //  la relation OneToMany avec l'entité Demande
  @OneToMany(() => Demande, demande => demande.client)
  demandes: Demande[];

  @OneToMany(() => ArticleFournisseur, af => af.fournisseur)
  articleFournisseurs: ArticleFournisseur[];




}
