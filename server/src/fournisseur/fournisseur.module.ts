import { Module } from '@nestjs/common';
import { FournisseurService } from './fournisseur.service';
import { FournisseurController } from './fournisseur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fournisseur } from './entities/fournisseur.entity';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { UserRepository } from 'src/user/repo/user.repository';
import { JwtModule } from '@nestjs/jwt'; // Importez JwtModule

@Module({
  imports:[TypeOrmModule.forFeature([Fournisseur, UserRepository]),UserModule, JwtModule.register({})],
  controllers: [FournisseurController],
  providers: [FournisseurService, UserService],
})
export class FournisseurModule {}
