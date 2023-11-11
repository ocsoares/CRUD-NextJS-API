import { IsEmail, IsNotEmpty } from 'class-validator';
import { DataUpdateAUserDTO } from './DataUpdateAUserDTO';

export class BodyUpdateAUserDTO extends DataUpdateAUserDTO {
    @IsNotEmpty()
    @IsEmail()
    readonly updateToEmail: string;
}
