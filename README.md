## Description

This is a tiny project created to test the ValidationPipe included in
the awesome NestJS framework.

The main idea is to show that the ValidationPipe seems to not work
with non-string fields such as numbers and booleans. To do so, I've added a simple DTO:

```ts
class TestDto {
  @IsNumber()
  field1: number;
}
```

I also added a controller thar receives field1 in the request query but map it to my TestDto class and it just return the same DTO:

```ts
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UsePipes( new ValidationPipe( { transform: true }))
  getHello(@Query() testDto: TestDto): TestDto {
    return testDto;
  }
}
```



## Installation

```bash
$ npm install
```

## Running the test

```bash

$ npm run test:e2e

```

The test is failing but it should pass since field1 is expect to be a number and I'm calling the controller with field1=15