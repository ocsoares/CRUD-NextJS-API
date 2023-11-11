import { IReturnUser } from 'src/interfaces/IReturnUser';
import { IUser } from 'src/models/IUser';

export abstract class UserRepository {
    abstract findById(id: string): Promise<IUser>;
    abstract findByEmail(email: string): Promise<IUser>;
    abstract findAll(): Promise<IReturnUser[]>;
    abstract deleteByEmail(email: string): Promise<any>; // MUDAR !!
}
