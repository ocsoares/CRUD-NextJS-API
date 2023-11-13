import { Test, TestingModule } from '@nestjs/testing';
import { SearchUsersByOrderService } from './search-users-by-order.service';

describe('SearchUsersByOrderService', () => {
  let service: SearchUsersByOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchUsersByOrderService],
    }).compile();

    service = module.get<SearchUsersByOrderService>(SearchUsersByOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
