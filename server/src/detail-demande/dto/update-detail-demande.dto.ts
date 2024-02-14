import { PartialType } from '@nestjs/mapped-types';
import { CreateDetailDemandeDto } from './create-detail-demande.dto';

export class UpdateDetailDemandeDto extends PartialType(CreateDetailDemandeDto) {}
