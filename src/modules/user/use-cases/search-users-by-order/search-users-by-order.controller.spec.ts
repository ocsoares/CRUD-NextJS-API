import { Test, TestingModule } from '@nestjs/testing';
import { SearchUsersByOrderController } from './search-users-by-order.controller';

describe('SearchUsersByOrderController', () => {
  let controller: SearchUsersByOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchUsersByOrderController],
    }).compile();

    controller = module.get<SearchUsersByOrderController>(SearchUsersByOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
