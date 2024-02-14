import { Injectable } from '@nestjs/common';
import { CreateArticleFournisseurDto } from './dto/create-article-fournisseur.dto';
import { UpdateArticleFournisseurDto } from './dto/update-article-fournisseur.dto';

@Injectable()
export class ArticleFournisseurService {
  create(createArticleFournisseurDto: CreateArticleFournisseurDto) {
    return 'This action adds a new articleFournisseur';
  }

  findAll() {
    return `This action returns all articleFournisseur`;
  }

  findOne(id: number) {
    return `This action returns a #${id} articleFournisseur`;
  }

  update(id: number, updateArticleFournisseurDto: UpdateArticleFournisseurDto) {
    return `This action updates a #${id} articleFournisseur`;
  }

  remove(id: number) {
    return `This action removes a #${id} articleFournisseur`;
  }
}
