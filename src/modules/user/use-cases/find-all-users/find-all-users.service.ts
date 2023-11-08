import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IReturnUser } from 'src/interfaces/IReturnUser';
import { IService } from 'src/interfaces/IService';
import { UserRepository } from 'src/repositories/abstracts/UserRepository';

@Injectable()
export class FindAllUsersService implements IService {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(): Promise<IReturnUser[]> {
        try {
            const allUsers = await this.userRepository.findAll();

            const returnAllUsers = allUsers.map(
                ({ firstName, lastName, email, createdAt, updatedAt }) =>
                    <IReturnUser>{
                        firstName,
                        lastName,
                        email,
                        createdAt,
                        updatedAt,
                    },
            );

            return returnAllUsers;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}
