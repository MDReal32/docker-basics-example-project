import { Module } from '@nestjs/common';
import { UnexpectedExceptionController } from './unexpected-exception.controller';
import { UnexpectedExceptionService } from './unexpected-exception.service';

@Module({
  controllers: [UnexpectedExceptionController],
  providers: [UnexpectedExceptionService]
})
export class UnexpectedExceptionModule {}
