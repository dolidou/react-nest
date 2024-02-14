import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { CreateArticleFournisseurDto } from 'src/article-fournisseur/dto/create-article-fournisseur.dto';


@Controller('article')
export class ArticleController {
  articlefournisseurService: any;
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() dto: CreateArticleDto, @Body() dto1: CreateArticleFournisseurDto) {
    return this.articleService.create(dto, dto1); }

  // @Get()
  // findAll() {
  //   return this.clientService.findAll();
  // }

  @Get()
  findMany()
  {
    return this.articleService.findMany()
  }

  @Put(':id')
  update(@Param('id') id: number,@Body() dto: CreateArticleDto , @Body() dto1: CreateArticleFournisseurDto)
  {
    return this.articleService.update(id,dto,dto1)
  }

  @Delete(':id')
  delete(@Param('id') id: number)
  {
    return this.articleService.delete(id)
  }

}
