import { Injectable } from "@nestjs/common";

@Injectable()
export class UnexpectedExceptionService {
  throwUnexpectedException() {
    throw new Error("Unexpected exception");
  }

  breakDown() {
    console.error(new Error("Unexpected exception"));
    process.exit(1);
  }
}
