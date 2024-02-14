import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demande } from './entities/demande.entity';
import { DetailDemande } from 'src/detail-demande/entities/detail-demande.entity';
import { DemandeController } from './demande.controller';
import { DemandeService } from './demande.service';
import { DetailDemandeService } from 'src/detail-demande/detail-demande.service';

@Module({
  imports:[TypeOrmModule.forFeature([Demande,DetailDemande])],
  controllers: [DemandeController],
  providers: [DemandeService, DetailDemandeService],
})

export class DemandeModule {}
