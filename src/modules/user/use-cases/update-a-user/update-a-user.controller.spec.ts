import { Test, TestingModule } from '@nestjs/testing';
import { UpdateAUserController } from './update-a-user.controller';

describe('UpdateAUserController', () => {
  let controller: UpdateAUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateAUserController],
    }).compile();

    controller = module.get<UpdateAUserController>(UpdateAUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
