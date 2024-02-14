import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ValidationPipe } from '@nestjs/common';
import { FournisseurService } from './fournisseur.service';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { Fournisseur } from './entities/fournisseur.entity';

@Controller('fournisseur')
export class FournisseurController {
  constructor(private readonly fournisseurService: FournisseurService) {}

  @Post(':userId')
  create(
    @Body(ValidationPipe) dto: CreateFournisseurDto,
    @Param('userId') userId: number,
  ) {
    return this.fournisseurService.create(dto, Number(userId));
  }

  // @Get()
  // findAll() {
  //   return this.fournisseurService.findAll();
  // }

  @Get()
  findMany(): Promise<Fournisseur[]>
  {
      console.log('Reached GET /fournisseur');

    return this.fournisseurService.findMany()
  }

  @Get('/findfournisseur/:userId')
  findById(@Param('userId') userId: number) {
    return this.fournisseurService.findById(Number(userId));
  }

  @Put(':id')
  update(@Param('id') id: number,@Body() dto: CreateFournisseurDto)
  {
    return this.fournisseurService.update(id,dto)
  }

  @Delete(':id')
  delete(@Param('id') id: number)
  {
    return this.fournisseurService.delete(id)
  }

  

}
