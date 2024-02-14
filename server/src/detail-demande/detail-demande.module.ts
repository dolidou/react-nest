import { Module } from '@nestjs/common';
import { DetailDemandeService } from './detail-demande.service';
import { DetailDemandeController } from './detail-demande.controller';

@Module({
  controllers: [DetailDemandeController],
  providers: [DetailDemandeService],
})
export class DetailDemandeModule {}
