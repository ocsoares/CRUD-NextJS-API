import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    @Length(3)
    readonly firstName: string;

    @IsNotEmpty()
    @IsString()
    @Length(3)
    readonly lastName: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @Length(7)
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    readonly confirmPassword: string;
}

export class DataUpdateAUserDTO extends PartialType(CreateUserDTO) {}
