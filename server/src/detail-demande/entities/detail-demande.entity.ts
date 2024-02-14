// detail-demande.entity.ts
import { Article } from 'src/article/entities/article.entity';
import { Demande } from 'src/demande/entities/demande.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class DetailDemande {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Demande, demande => demande.detailsDemande)
  demande: Demande;

  @ManyToOne(() => Article, article => article.detailsDemande)
  article: Article;

  @Column()
  detail_demande: string;

  @Column()
  qte: number;

  @Column()
  prix: number;

}
