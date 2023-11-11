import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { UserRepository } from 'src/repositories/abstracts/UserRepository';
import { BodyUpdateAUserDTO } from './dtos/BodyUpdateAUserDTO';
import { UserNotFoundException } from 'src/exceptions/user-exceptions/user-not-found.exception';
import { InvalidUpdateUserBodyException } from 'src/exceptions/user-exceptions/invalid-update-user-body.exception';
import { MissingPasswordFieldsException } from 'src/exceptions/user-exceptions/missing-password-fields.exception';
import { compare, hash } from 'bcrypt';
import { UserPasswordDoNotMatchException } from 'src/exceptions/user-exceptions/user-password-do-not-match.exception';

@Injectable()
export class UpdateAUserService implements IService {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(body: BodyUpdateAUserDTO): Promise<object> {
        const { updateToEmail, firstName, lastName, email, confirmPassword } =
            body;

        let { password } = body;

        if (
            !firstName &&
            !lastName &&
            !email &&
            !password &&
            !confirmPassword
        ) {
            throw new InvalidUpdateUserBodyException();
        }

        if ((password && !confirmPassword) || (confirmPassword && !password)) {
            throw new MissingPasswordFieldsException();
        }

        if (password !== confirmPassword) {
            throw new UserPasswordDoNotMatchException();
        }

        try {
            const user = await this.userRepository.findByEmail(updateToEmail);

            if (!user) {
                throw new UserNotFoundException();
            }

            const { password: userPassword } = user;

            if (password) {
                const isTheSameUserPassword = await compare(
                    password,
                    userPassword,
                );

                if (!isTheSameUserPassword) {
                    password = await hash(password, 10);
                } else {
                    password = userPassword; // Just returns the registered user password hash
                }
            }

            await this.userRepository.updateByEmail(updateToEmail, {
                firstName,
                lastName,
                email,
                password,
            });

            return { updatedUser: true };
        } catch (error) {
            if (
                error instanceof UserNotFoundException ||
                error instanceof InvalidUpdateUserBodyException ||
                error instanceof MissingPasswordFieldsException ||
                error instanceof UserPasswordDoNotMatchException
            ) {
                throw error;
            }

            throw new InternalServerErrorException();
        }
    }
}
