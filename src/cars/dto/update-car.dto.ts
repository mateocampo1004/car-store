import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {

    make?: string;
    model?: string;
    year?: number;
    color?: string;


}
