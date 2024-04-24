import { Controller, Get } from "@nestjs/common";

import { UnexpectedExceptionService } from "./unexpected-exception.service";

@Controller("unexpected-exception")
export class UnexpectedExceptionController {
  constructor(private readonly unexpectedExceptionService: UnexpectedExceptionService) {}

  @Get("simple-exception")
  async get() {
    this.unexpectedExceptionService.throwUnexpectedException();
  }

  @Get("break-down")
  async breakDown() {
    this.unexpectedExceptionService.breakDown();
  }
}
