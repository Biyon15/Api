import { Controller, Get } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Get()
  name() {
    return 'name';
  }

  @Get()
  email() {
    return 'email';
  }

  @Get()
  password() {
    return 'password';
  }
}
