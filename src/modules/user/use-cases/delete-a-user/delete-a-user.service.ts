import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { UserRepository } from 'src/repositories/abstracts/UserRepository';
import { DeleteUserDTO } from './dtos/DeleteUserDTO';
import { UserNotFoundException } from 'src/exceptions/user-exceptions/user-not-found.exception';

@Injectable()
export class DeleteAUserService implements IService {
    constructor(private readonly userRepository: UserRepository) {}

    async execute({ email }: DeleteUserDTO): Promise<object> {
        try {
            const user = await this.userRepository.findByEmail(email);

            if (!user) {
                throw new UserNotFoundException();
            }
            await this.userRepository.deleteByEmail(email);

            return { deletedUser: true };
        } catch (error) {
            if (error instanceof UserNotFoundException) {
                throw error;
            }

            throw new InternalServerErrorException();
        }
    }
}
