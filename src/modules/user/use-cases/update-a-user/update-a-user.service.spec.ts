import { Test, TestingModule } from '@nestjs/testing';
import { UpdateAUserService } from './update-a-user.service';

describe('UpdateAUserService', () => {
  let service: UpdateAUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateAUserService],
    }).compile();

    service = module.get<UpdateAUserService>(UpdateAUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
