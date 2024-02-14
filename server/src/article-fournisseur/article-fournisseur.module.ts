import { Module } from '@nestjs/common';
import { ArticleFournisseurService } from './article-fournisseur.service';
import { ArticleFournisseurController } from './article-fournisseur.controller';

@Module({
  controllers: [ArticleFournisseurController],
  providers: [ArticleFournisseurService],
})
export class ArticleFournisseurModule {}
