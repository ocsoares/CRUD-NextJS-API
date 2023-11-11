import { Injectable } from '@nestjs/common';
import { IUser } from 'src/models/IUser';
import { UserRepository } from 'src/repositories/abstracts/UserRepository';
import { PrismaService } from '../prisma-client.service';
import { IReturnUser } from 'src/interfaces/IReturnUser';
import { DataUpdateAUserDTO } from 'src/modules/user/use-cases/update-a-user/dtos/DataUpdateAUserDTO';

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async findByEmail(email: string): Promise<IUser> {
        const findByEmail = await this.prismaService.user.findUnique({
            where: { email },
        });

        return findByEmail;
    }

    async findById(id: string): Promise<IUser> {
        const findById = await this.prismaService.user.findUnique({
            where: { id },
        });

        return findById;
    }

    async findAll(): Promise<IReturnUser[]> {
        const users = await this.prismaService.user.findMany();

        return users;
    }

    async deleteByEmail(email: string): Promise<IUser> {
        const deleteByEmail = await this.prismaService.user.delete({
            where: { email },
        });

        return deleteByEmail;
    }

    async updateByEmail(
        updateToEmail: string,
        { firstName, lastName, email, password }: DataUpdateAUserDTO,
    ): Promise<IUser> {
        const updatedUser = await this.prismaService.user.update({
            where: { email: updateToEmail },
            data: { firstName, lastName, email, password },
        });

        return updatedUser;
    }
}
