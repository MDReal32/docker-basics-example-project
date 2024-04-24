import { Module } from "@nestjs/common";

import { PingModule } from "./ping/ping.module";
import { UnexpectedExceptionModule } from './unexpected-exception/unexpected-exception.module';

@Module({
  imports: [PingModule, UnexpectedExceptionModule]
})
export class AppModule {}
