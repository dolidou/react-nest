import { Client } from "src/client/entities/client.entity";
import { Fournisseur } from "src/fournisseur/entities/fournisseur.entity";

export class CreateDemandeDto 
{
    num: string;
    date_demande: string;
    client: Client;
    fournisseur: Fournisseur;

}
