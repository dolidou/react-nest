import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DemandeService } from './demande.service';
import { CreateDemandeDto } from './dto/create-demande.dto';
import { CreateDetailDemandeDto } from 'src/detail-demande/dto/create-detail-demande.dto';


@Controller('demande')
export class DemandeController {
  constructor(private readonly demandeService: DemandeService) {}

  @Post()
  create(@Body() createDemandeDto: { dto: CreateDemandeDto; dtos: CreateDetailDemandeDto[] }) {
    const { dto, dtos } = createDemandeDto;
    return this.demandeService.create({ dto, dtos });
  }

  @Get()
  findMany() {
    return this.demandeService.findMany();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateDemandeDto, @Body() dto1: CreateDetailDemandeDto[]) {
    return this.demandeService.update(id, dto, dto1);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.demandeService.delete(id);
  }
}
