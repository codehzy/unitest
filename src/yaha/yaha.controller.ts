import { Controller, Get } from '@nestjs/common';

@Controller('yaha')
export class YahaController {
  @Get('/api/users')
  sayYaha(): string {
    return 'say yaha11';
  }
}
