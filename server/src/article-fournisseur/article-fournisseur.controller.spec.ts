import { Test, TestingModule } from '@nestjs/testing';
import { ArticleFournisseurController } from './article-fournisseur.controller';
import { ArticleFournisseurService } from './article-fournisseur.service';

describe('ArticleFournisseurController', () => {
  let controller: ArticleFournisseurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleFournisseurController],
      providers: [ArticleFournisseurService],
    }).compile();

    controller = module.get<ArticleFournisseurController>(ArticleFournisseurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
