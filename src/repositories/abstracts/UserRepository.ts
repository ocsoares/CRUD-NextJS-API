import { IUser } from 'src/models/IUser';

export abstract class UserRepository {
    abstract findById(id: string): Promise<IUser>;
    abstract findByEmail(email: string): Promise<IUser>;
}
