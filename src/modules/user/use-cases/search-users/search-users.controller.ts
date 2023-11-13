import { Controller, Get, Param } from '@nestjs/common';
import { IController } from 'src/interfaces/IController';
import { SearchUsersService } from './search-users.service';
import { IReturnUser } from 'src/interfaces/IReturnUser';

@Controller('users')
export class SearchUsersController implements IController {
    constructor(private readonly searchUsersService: SearchUsersService) {}

    @Get('search/:partialName')
    async handle(
        @Param('partialName') partialName: string,
    ): Promise<IReturnUser[]> {
        const usersFound = await this.searchUsersService.execute(partialName);

        return usersFound;
    }
}
