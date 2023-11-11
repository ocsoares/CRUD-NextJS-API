import { IsEmail, IsNotEmpty } from 'class-validator';

export class DeleteUserDTO {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
}
