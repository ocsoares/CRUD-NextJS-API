import { Controller, Get, Param } from '@nestjs/common';
import { IController } from 'src/interfaces/IController';
import { SearchUsersByOrderService } from './search-users-by-order.service';
import { IReturnUser } from 'src/interfaces/IReturnUser';
import { SearchUsersByOrderDTO } from './dtos/SearchUsersByOrderDTO';

@Controller('users')
export class SearchUsersByOrderController implements IController {
    constructor(
        private readonly searchUsersByOrderService: SearchUsersByOrderService,
    ) {}

    @Get('search/order/:order')
    async handle(
        @Param() order: SearchUsersByOrderDTO,
    ): Promise<IReturnUser[]> {
        const searchUsersByOrder =
            await this.searchUsersByOrderService.execute(order);

        return searchUsersByOrder;
    }
}
