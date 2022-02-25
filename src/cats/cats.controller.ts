import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsDto } from './dto/cats.dto';
import { Cat } from './interface/cat.interface';

@Controller('cats/nice')
export class CatsController {
  constructor(private cateService: CatsService) {}

  @Get('ab*cd')
  finAll(@Param() params): string {
    return `this action returns all ${params} cats`;
  }

  @Post()
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  @Redirect('https://nestjs.com', 301)
  create(): string {
    return `this action add a new cat`;
  }

  @Get('docs')
  @Redirect('https://nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'http://www.baidu.com/' };
    }
  }

  // @Get(':id')
  // findOne(@Param() params): string {
  //   console.log(params.id);
  //   return `this action returns a #${params.id} cat`;
  // }

  // @Get(':id')
  // findTwo(@Param('id') id): string {
  //   console.log(id);
  //   return `this action returns a #${id} cat`;
  // }

  @Get('async')
  async findAsync(): Promise<any[]> {
    return [];
  }

  @Post('catDto')
  async createCatDto(@Body() createCatDto: CatsDto) {
    return `This action adds ${createCatDto} a new cat`;
  }

  @Post('catProvider')
  async providerCreate(@Body() createCatDto: CatsDto) {
    this.cateService.create(createCatDto);
  }

  @Get('catProviderOne')
  async findAllProvider(): Promise<Cat[]> {
    return this.cateService.findAll();
  }
}
