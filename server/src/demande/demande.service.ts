import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Demande } from './entities/demande.entity';
import { DetailDemande } from 'src/detail-demande/entities/detail-demande.entity';
import { CreateDemandeDto } from './dto/create-demande.dto';
import { CreateDetailDemandeDto } from 'src/detail-demande/dto/create-detail-demande.dto';

@Injectable()
export class DemandeService {
  constructor(
    @InjectRepository(Demande) private readonly demandeRepository: Repository<Demande>,
    @InjectRepository(DetailDemande) private readonly detailDemandeRepository: Repository<DetailDemande>,
  ) {}


async generateNum(): Promise<string> {
  const currentYear = new Date().getFullYear();
  const lastDemande = await this.demandeRepository.findOne({
    where: { num: Like(`ORDER${currentYear}%`) },
    order: { num: 'DESC' },
  });

  let nextSequence = 1;

  if (lastDemande) {
    const lastSequence = parseInt(lastDemande.num.slice(-5), 10);
    nextSequence = lastSequence + 1;
  }

  const num = `ORDER${currentYear}${nextSequence.toString().padStart(5, '0')}`;

  return num;
}

  async create({ dto, dtos }: { dto: CreateDemandeDto; dtos: CreateDetailDemandeDto[] }) {
    console.log(dto, dtos);
   
    const num = await this.generateNum();

    const createDemandeDto: CreateDemandeDto = {
      
      num: num,
      date_demande: dto.date_demande,
      client: dto.client,
      fournisseur: dto.fournisseur,
    };
    const demande = this.demandeRepository.create(createDemandeDto);
    await this.demandeRepository.save(createDemandeDto);

    // Créer l'entrée dans la table pivot
    const detailDemandes = dtos.map((dto1) => ({
      qte: dto1.qte,
      prix: dto1.prix,
      article: dto1.article,
      demande: createDemandeDto,
      detail_demande: dto1.detail_demande || '', // Assurez-vous de gérer les valeurs optionnelles correctement
    }));

    const createdDetailDemandes = this.detailDemandeRepository.create(detailDemandes);
    await this.detailDemandeRepository.save(createdDetailDemandes);

    return createDemandeDto;
  }


  

  findMany() {
    return this.demandeRepository.find();
  }

  async update(id: number, dto: CreateDemandeDto, dto1: CreateDetailDemandeDto[]) {
    const demande = await this.demandeRepository.findOne({ where: { id } });
    const detaildemande = await this.detailDemandeRepository.findOne({ where: { id } });

    Object.assign(demande, dto);
    await this.demandeRepository.save(demande);

    Object.assign(detaildemande, dto1);
    await this.detailDemandeRepository.save(detaildemande);

    return demande;
  }

  async delete(id: number) {
    const demande = await this.demandeRepository.findOne({ where: { id } });
    await this.demandeRepository.remove(demande);

    const detaildemande = await this.detailDemandeRepository.findOne({ where: { id } });
    await this.detailDemandeRepository.remove(detaildemande);

    return demande;
  }
}
