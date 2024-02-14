import { Article } from "src/article/entities/article.entity";
import { Fournisseur } from "src/fournisseur/entities/fournisseur.entity";

export class CreateArticleFournisseurDto 
{
    qte: number;
    prix_unitaire: number;
    fournisseur: Fournisseur;
    article: Article;

}
