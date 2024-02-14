import { Test, TestingModule } from '@nestjs/testing';
import { ArticleFournisseurService } from './article-fournisseur.service';

describe('ArticleFournisseurService', () => {
  let service: ArticleFournisseurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleFournisseurService],
    }).compile();

    service = module.get<ArticleFournisseurService>(ArticleFournisseurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
