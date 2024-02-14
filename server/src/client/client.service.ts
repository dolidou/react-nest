import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ClientService {
  find(): Promise<Client[]> {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectRepository(Client) private readonly clientRepository:Repository<Client>,private userService: UserService,
  )

  {
  }

  async create(dto: CreateClientDto)
  {
    const client=this.clientRepository.create(dto)
    return await this.clientRepository.save(client)
  }

  findMany(userId: number) {
    return this.clientRepository.find({
      relations: ['user'],
      where: { user: { id: userId } },
    });
  }

  findManyClient() {
    return this.clientRepository.find();
  }
  async update(id: number, dto: CreateClientDto)
  {
    const client=await this.clientRepository.findOne({where: {id}})
    Object.assign(client, dto)

    return await this.clientRepository.save(client)
  }

  async delete(id: number)
  {
    const client=await this.clientRepository.findOne({where: {id}})

    return await this.clientRepository.remove(client)
  }

}
