import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ValidationPipe, UseGuards } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './entities/client.entity';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';

@Controller('client')
// @ApiTags('Client')
// @ApiSecurity('JWT-auth')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('')
  create(
    @Body(ValidationPipe) dto: CreateClientDto, 
    )
  {
    return this.clientService.create(dto);

  }

  // @Get()
  // findAll() {
  //   return this.clientService.findAll();
  // }

  @Get('/findallclient/:userId')
  findMany(@Param('userId') userId: number): Promise<Client[]>
  {
      console.log('Reached GET /client');

    return this.clientService.findMany(Number(userId))
  }

  @Put(':id')
  update(@Param('id') id: number,@Body() dto: CreateClientDto)
  {
    return this.clientService.update(id,dto)
  }

  @Delete(':id')
  delete(@Param('id') id: number)
  {
    return this.clientService.delete(id)
  }

  // @UseGuards(JwtAuthGuard)

  @Get('')
  findManyClient(): Promise<Client[]>
  {
      console.log('jazet /client');

    return this.clientService.findManyClient()
  }

}
