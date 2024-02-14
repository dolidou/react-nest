import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { User } from "src/user/entities/user.entity";
import { ManyToOne } from "typeorm";

export class CreateClientDto 
{
    @ApiProperty()
    @IsString()
    nom: string;
    @ApiProperty()
    @IsString()
    prenom: string;
    @ApiProperty()
    @IsString()
    adresse: string;
    @ApiProperty()
    @IsString()
    num_tel: string;

//      //   many todos can belong to single user
//   @ManyToOne(() => User, (user) => user.clients)
//   user: User;

}

