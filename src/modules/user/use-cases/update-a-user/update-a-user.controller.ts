import { Body, Controller, Patch } from '@nestjs/common';
import { IController } from 'src/interfaces/IController';
import { UpdateAUserService } from './update-a-user.service';
import { BodyUpdateAUserDTO } from './dtos/BodyUpdateAUserDTO';

@Controller()
export class UpdateAUserController implements IController {
    constructor(private readonly updateAUserService: UpdateAUserService) {}

    @Patch('user')
    async handle(@Body() body: BodyUpdateAUserDTO): Promise<object> {
        const updatedUser = await this.updateAUserService.execute(body);

        return updatedUser;
    }
}
