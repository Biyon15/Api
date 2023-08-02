import { Controller, Post } from '@nestjs/common';
import QueryString from 'qs';
import { CreateRegisterDto } from './dto/create-register.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

@Post()
async create (@Body() createRegisterDto: CreateRegisterDto) {
  return 'This action adds new register'
 }

@Post()
findOne(@Query('name') name: string){
  return 'This action returns the name of the users';
}

@Post()
findOne(@Query('email') email: string) {
  return 'This action returns the email of the users';
}

@Post()
findOne(@Query('password') password: string) {
  return 'This action returns the password of users';
}



 
  
}
