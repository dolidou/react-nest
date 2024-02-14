import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailDemandeService } from './detail-demande.service';
import { CreateDetailDemandeDto } from './dto/create-detail-demande.dto';
import { UpdateDetailDemandeDto } from './dto/update-detail-demande.dto';

@Controller('detail-demande')
export class DetailDemandeController {
  constructor(private readonly detailDemandeService: DetailDemandeService) {}

  @Post()
  create(@Body() createDetailDemandeDto: CreateDetailDemandeDto) {
    return this.detailDemandeService.create(createDetailDemandeDto);
  }

  @Get()
  findAll() {
    return this.detailDemandeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailDemandeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetailDemandeDto: UpdateDetailDemandeDto) {
    return this.detailDemandeService.update(+id, updateDetailDemandeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailDemandeService.remove(+id);
  }
}
