import { Test, TestingModule } from '@nestjs/testing';
import { DetailDemandeController } from './detail-demande.controller';
import { DetailDemandeService } from './detail-demande.service';

describe('DetailDemandeController', () => {
  let controller: DetailDemandeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailDemandeController],
      providers: [DetailDemandeService],
    }).compile();

    controller = module.get<DetailDemandeController>(DetailDemandeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
