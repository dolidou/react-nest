// article.entity.ts
import ArticleFournisseur from 'src/article-fournisseur/entities/article-fournisseur.entity';
import { DetailDemande } from 'src/detail-demande/entities/detail-demande.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  designation: string;

  

  // la relation OneToMany avec l'entité ArticleFournisseur
  @OneToMany(() => ArticleFournisseur, af => af.article)
  articleFournisseurs: ArticleFournisseur[];

  @OneToMany(() => DetailDemande, detailDemande => detailDemande.demande)
  detailsDemande: DetailDemande[];
}
