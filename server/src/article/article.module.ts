import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { Article } from './entities/article.entity';
import { ArticleFournisseurService } from 'src/article-fournisseur/article-fournisseur.service';
import { ArticleFournisseur } from 'src/article-fournisseur/entities/article-fournisseur.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Article,ArticleFournisseur])],
  controllers: [ArticleController],
  providers: [ArticleService, ArticleFournisseurService],
})

export class ArticleModule {}
