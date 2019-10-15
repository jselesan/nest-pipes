import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { IsNumber, IsBoolean, IsNumberString, IsBooleanString } from 'class-validator';

class TestDto {
  @IsNumber()
  field1: number;
}

// tslint:disable-next-line:max-classes-per-file
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UsePipes( new ValidationPipe( { transform: true }))
  getHello(@Query() testDto: TestDto): TestDto {
    return testDto;
  }
}
