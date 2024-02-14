import { Article } from "src/article/entities/article.entity";
import { Demande } from "src/demande/entities/demande.entity";

export class CreateDetailDemandeDto 
{
    demande: Demande;
    article: Partial<Article>; // Utilisez Partial<Article> pour un objet partiel
    detail_demande: string;
    qte: number;
    prix: number;

}
