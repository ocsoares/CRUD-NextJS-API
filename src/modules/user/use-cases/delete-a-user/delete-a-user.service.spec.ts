import { Test, TestingModule } from '@nestjs/testing';
import { DeleteAUserService } from './delete-a-user.service';

describe('DeleteAUserService', () => {
  let service: DeleteAUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteAUserService],
    }).compile();

    service = module.get<DeleteAUserService>(DeleteAUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
