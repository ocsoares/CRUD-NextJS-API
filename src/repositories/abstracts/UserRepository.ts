import { IReturnUser } from 'src/interfaces/IReturnUser';
import { IUser } from 'src/models/IUser';
import { SearchUsersByOrderDTO } from 'src/modules/user/use-cases/search-users-by-order/dtos/SearchUsersByOrderDTO';
import { DataUpdateAUserDTO } from 'src/modules/user/use-cases/update-a-user/dtos/DataUpdateAUserDTO';

export abstract class UserRepository {
    abstract findById(id: string): Promise<IUser>;
    abstract findByEmail(email: string): Promise<IUser>;
    abstract findAll(): Promise<IReturnUser[]>;
    abstract deleteByEmail(email: string): Promise<IUser>;
    abstract updateByEmail(
        updateToEmail: string,
        { firstName, lastName, email, password }: DataUpdateAUserDTO,
    ): Promise<IUser>;
    abstract searchUsers(partialName: string): Promise<IReturnUser[]>;
    abstract searchUsersByOrder(
        order: SearchUsersByOrderDTO,
    ): Promise<IReturnUser[]>;
}
