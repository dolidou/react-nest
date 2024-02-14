// demande.entity.ts
import { Client } from 'src/client/entities/client.entity';
import { DetailDemande } from 'src/detail-demande/entities/detail-demande.entity';
import { Fournisseur } from 'src/fournisseur/entities/fournisseur.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';


@Entity()
export class Demande {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  num: string;

  @Column()
  date_demande: Date;

  @ManyToOne(() => Client, client => client.demandes)
  client: Client;

  @ManyToOne(() => Fournisseur, fournisseur => fournisseur.demandes)
  fournisseur: Fournisseur;

  @OneToMany(() => DetailDemande, detailDemande => detailDemande.demande)
  detailsDemande: DetailDemande[];
  // Ajoutez d'autres colonnes spécifiques aux demandes
}
