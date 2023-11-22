import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IService } from 'src/interfaces/IService';
import { UserRepository } from 'src/repositories/abstracts/UserRepository';
import { IReturnUser } from 'src/interfaces/IReturnUser';
import { UserPresenter } from 'src/presenters/user.presenter';

@Injectable()
export class SearchUsersService implements IService {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(partialName: string): Promise<IReturnUser[]> {
        try {
            const usersFound =
                await this.userRepository.searchUsers(partialName);

            const returnUsersFound =
                UserPresenter.toJSONOutputArray(usersFound);

            return returnUsersFound;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}
