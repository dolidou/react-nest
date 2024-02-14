import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import ArticleFournisseur from 'src/article-fournisseur/entities/article-fournisseur.entity';
import { CreateArticleFournisseurDto } from 'src/article-fournisseur/dto/create-article-fournisseur.dto';


@Injectable()
export class ArticleService {
  constructor(@InjectRepository(Article) private readonly articleRepository:Repository<Article>,
  @InjectRepository(ArticleFournisseur) private readonly articleFournisseurRepository: Repository<ArticleFournisseur>,

  )
  {
  }
  async create(dto: CreateArticleDto, dto1:CreateArticleFournisseurDto)
  {
    const article=this.articleRepository.create(dto)
   
    const createdArticle = await this.articleRepository.save(article);
     // Créer l'entrée dans la table pivot
     const articleFournisseurDto: CreateArticleFournisseurDto = {
      qte: dto1.qte,
      prix_unitaire: dto1.prix_unitaire,
      fournisseur: dto1.fournisseur,
      article: createdArticle, // Utiliser l'objet Article créé plutôt que son ID
      
    };
    
    const articleFournisseur = this.articleFournisseurRepository.create(articleFournisseurDto);
    console.log(articleFournisseurDto);
    await this.articleFournisseurRepository.save(articleFournisseur);

    return createdArticle;
  }

  async findMany() {
    const articles = await this.articleRepository
      .createQueryBuilder('article')
      .leftJoinAndSelect('article.articleFournisseurs', 'articleFournisseur')
      .leftJoinAndSelect('articleFournisseur.fournisseur', 'fournisseur')
      .getMany();
  
    return articles;
  }
  

  async update(id: number, dto: CreateArticleDto, dto1:CreateArticleFournisseurDto)
  {
    const article=await this.articleRepository.findOne({where: {id}})
    const articlefournisseur = await this.articleFournisseurRepository.findOne({ where: { id } });

    Object.assign(article, dto)
    await this.articleRepository.save(article)
    Object.assign(articlefournisseur, dto1)
    await this.articleFournisseurRepository.save(articlefournisseur)

    return article



  }

  async delete(id: number)
  {
    const article=await this.articleRepository.findOne({where: {id}})

    return await this.articleRepository.remove(article)
  }


}
