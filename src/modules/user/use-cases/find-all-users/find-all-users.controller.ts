import { Controller, Get } from '@nestjs/common';
import { IController } from 'src/interfaces/IController';
import { FindAllUsersService } from './find-all-users.service';
import { IReturnUser } from 'src/interfaces/IReturnUser';

@Controller()
export class FindAllUsersController implements IController {
    constructor(private readonly findAllUsersService: FindAllUsersService) {}

    @Get('users')
    async handle(): Promise<IReturnUser[]> {
        const allUsers = await this.findAllUsersService.execute();

        return allUsers;
    }
}
