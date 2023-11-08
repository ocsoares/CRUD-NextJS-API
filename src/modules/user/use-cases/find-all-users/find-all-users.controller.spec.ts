import { Test, TestingModule } from '@nestjs/testing';
import { FindAllUsersController } from './find-all-users.controller';

describe('FindAllUsersController', () => {
  let controller: FindAllUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllUsersController],
    }).compile();

    controller = module.get<FindAllUsersController>(FindAllUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
