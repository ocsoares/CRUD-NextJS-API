import { Injectable } from '@nestjs/common';
import { IReturnUser } from 'src/interfaces/IReturnUser';
import { IService } from 'src/interfaces/IService';
import { UserRepository } from 'src/repositories/abstracts/UserRepository';
import { SearchUsersByOrderDTO } from './dtos/SearchUsersByOrderDTO';

@Injectable()
export class SearchUsersByOrderService implements IService {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(order: SearchUsersByOrderDTO): Promise<IReturnUser[]> {
        const searchUsersByOrder =
            await this.userRepository.searchUsersByOrder(order);

        const returnSearchUsersByOrder = searchUsersByOrder.map(
            ({ firstName, lastName, email, createdAt, updatedAt }) =>
                <IReturnUser>{
                    firstName,
                    lastName,
                    email,
                    createdAt,
                    updatedAt,
                },
        );

        return returnSearchUsersByOrder;
    }
}
