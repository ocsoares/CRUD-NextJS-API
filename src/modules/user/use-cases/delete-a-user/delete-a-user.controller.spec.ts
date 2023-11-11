import { Test, TestingModule } from '@nestjs/testing';
import { DeleteAUserController } from './delete-a-user.controller';

describe('DeleteAUserController', () => {
  let controller: DeleteAUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteAUserController],
    }).compile();

    controller = module.get<DeleteAUserController>(DeleteAUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
