import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CatControllerDto } from './dto/cat-controller.dto';

@Controller('cat-controller')
export class CatControllerController {
  @Post()
  create(@Body() createCatDto: CatControllerDto) {
    return `this action add a new cat`;
  }

  @Get()
  findAll(@Query() query) {
    return `this action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto) {
    return `this action updates a #${id} cat put`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this is action remove a #${id} cats`;
  }
}
