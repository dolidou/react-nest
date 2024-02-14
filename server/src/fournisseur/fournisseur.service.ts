import { Injectable } from '@nestjs/common';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { Fournisseur } from './entities/fournisseur.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class FournisseurService {

  constructor(@InjectRepository(Fournisseur) private readonly fournisseurRepository:Repository<Fournisseur>,
  private userService: UserService,

  )
  {
  }

  
  async create(dto: CreateFournisseurDto, userId: number)
  {
    let fournisseur: Fournisseur = new Fournisseur();
    fournisseur.code = dto.code;
    fournisseur.nom = dto.nom;
    fournisseur.adresse =dto.adresse;
    fournisseur.num_tel = dto.num_tel;
    fournisseur.rc = dto.rc;
    fournisseur.ai = dto.ai;
    fournisseur.nif = dto.nif;
    fournisseur.user = await this.userService.findUserById(userId);
    return this.fournisseurRepository.save(fournisseur);
  }

  findMany() {
    return this.fournisseurRepository.find();
  }

  findById(userId: number) {
    return this.fournisseurRepository.find({
      relations: ['user'],
      where: { user: { id: userId }},
    });
  }

  async update(id: number, dto: CreateFournisseurDto)
  {
    const fournisseur=await this.fournisseurRepository.findOne({where: {id}})
    Object.assign(fournisseur, dto)

    return await this.fournisseurRepository.save(fournisseur)
  }

  async delete(id: number)
  {
    const fournisseur=await this.fournisseurRepository.findOne({where: {id}})

    return await this.fournisseurRepository.remove(fournisseur)
  }
}
