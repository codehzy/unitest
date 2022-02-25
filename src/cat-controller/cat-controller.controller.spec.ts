import { Test, TestingModule } from '@nestjs/testing';
import { CatControllerController } from './cat-controller.controller';

describe('CatControllerController', () => {
  let controller: CatControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatControllerController],
    }).compile();

    controller = module.get<CatControllerController>(CatControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
