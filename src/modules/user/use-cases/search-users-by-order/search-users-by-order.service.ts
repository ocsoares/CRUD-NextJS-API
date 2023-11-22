import { Injectable } from '@nestjs/common';
import { IReturnUser } from 'src/interfaces/IReturnUser';
import { IService } from 'src/interfaces/IService';
import { UserRepository } from 'src/repositories/abstracts/UserRepository';
import { SearchUsersByOrderDTO } from './dtos/SearchUsersByOrderDTO';
import { UserPresenter } from 'src/presenters/user.presenter';

@Injectable()
export class SearchUsersByOrderService implements IService {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(order: SearchUsersByOrderDTO): Promise<IReturnUser[]> {
        const searchUsersByOrder =
            await this.userRepository.searchUsersByOrder(order);

        const returnSearchUsersByOrder =
            UserPresenter.toJSONOutputArray(searchUsersByOrder);

        return returnSearchUsersByOrder;
    }
}
