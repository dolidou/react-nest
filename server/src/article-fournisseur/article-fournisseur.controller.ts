import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticleFournisseurService } from './article-fournisseur.service';
import { CreateArticleFournisseurDto } from './dto/create-article-fournisseur.dto';
import { UpdateArticleFournisseurDto } from './dto/update-article-fournisseur.dto';

@Controller('article-fournisseur')
export class ArticleFournisseurController {
  constructor(private readonly articleFournisseurService: ArticleFournisseurService) {}

  @Post()
  create(@Body() createArticleFournisseurDto: CreateArticleFournisseurDto) {
    return this.articleFournisseurService.create(createArticleFournisseurDto);
  }

  @Get()
  findAll() {
    return this.articleFournisseurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleFournisseurService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleFournisseurDto: UpdateArticleFournisseurDto) {
    return this.articleFournisseurService.update(+id, updateArticleFournisseurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleFournisseurService.remove(+id);
  }
}
