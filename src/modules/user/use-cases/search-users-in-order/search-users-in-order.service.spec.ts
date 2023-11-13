import { Test, TestingModule } from '@nestjs/testing';
import { SearchUsersInOrderService } from './search-users-in-order.service';

describe('SearchUsersInOrderService', () => {
  let service: SearchUsersInOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchUsersInOrderService],
    }).compile();

    service = module.get<SearchUsersInOrderService>(SearchUsersInOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
