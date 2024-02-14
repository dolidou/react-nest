import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { UserModule } from 'src/user/user.module';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Client]), UserModule],
  controllers: [ClientController],
  providers: [ClientService],
})

export class ClientModule {}
