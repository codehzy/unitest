import { Test, TestingModule } from '@nestjs/testing';
import { YahaController } from './yaha.controller';

describe('YahaController', () => {
  let controller: YahaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YahaController],
    }).compile();

    controller = module.get<YahaController>(YahaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
