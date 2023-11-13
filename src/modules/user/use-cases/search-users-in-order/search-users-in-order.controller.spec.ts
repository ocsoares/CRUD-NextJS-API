import { Test, TestingModule } from '@nestjs/testing';
import { SearchUsersInOrderController } from './search-users-in-order.controller';

describe('SearchUsersInOrderController', () => {
  let controller: SearchUsersInOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchUsersInOrderController],
    }).compile();

    controller = module.get<SearchUsersInOrderController>(SearchUsersInOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
