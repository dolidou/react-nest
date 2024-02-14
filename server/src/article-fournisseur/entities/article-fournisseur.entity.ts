// article-fournisseur.entity.ts
import { Article } from 'src/article/entities/article.entity';
import { Fournisseur } from 'src/fournisseur/entities/fournisseur.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArticleFournisseur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qte: number;

  @Column()
  prix_unitaire: number;

  @ManyToOne(() => Fournisseur, fournisseur => fournisseur.articleFournisseurs)
  fournisseur: Fournisseur;

  @ManyToOne(() => Article, article => article.articleFournisseurs)
  article: Article;

}

export default ArticleFournisseur; // Exportez la classe ArticleFournisseur
