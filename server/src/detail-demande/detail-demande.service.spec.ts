import { Test, TestingModule } from '@nestjs/testing';
import { DetailDemandeService } from './detail-demande.service';

describe('DetailDemandeService', () => {
  let service: DetailDemandeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailDemandeService],
    }).compile();

    service = module.get<DetailDemandeService>(DetailDemandeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
