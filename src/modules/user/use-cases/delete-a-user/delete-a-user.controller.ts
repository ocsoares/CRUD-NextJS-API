import { Body, Controller, Delete } from '@nestjs/common';
import { IController } from 'src/interfaces/IController';
import { DeleteAUserService } from './delete-a-user.service';
import { DeleteUserDTO } from './dtos/DeleteUserDTO';

@Controller()
export class DeleteAUserController implements IController {
    constructor(private readonly deleteAUserService: DeleteAUserService) {}

    @Delete('user')
    async handle(@Body() body: DeleteUserDTO): Promise<object> {
        const deletedUser = await this.deleteAUserService.execute(body);

        return deletedUser;
    }
}
