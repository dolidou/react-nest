import { Injectable } from '@nestjs/common';
import { CreateDetailDemandeDto } from './dto/create-detail-demande.dto';
import { UpdateDetailDemandeDto } from './dto/update-detail-demande.dto';

@Injectable()
export class DetailDemandeService {
  create(createDetailDemandeDto: CreateDetailDemandeDto) {
    return 'This action adds a new detailDemande';
  }

  findAll() {
    return `This action returns all detailDemande`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detailDemande`;
  }

  update(id: number, updateDetailDemandeDto: UpdateDetailDemandeDto) {
    return `This action updates a #${id} detailDemande`;
  }

  remove(id: number) {
    return `This action removes a #${id} detailDemande`;
  }
}
