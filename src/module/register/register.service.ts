import { Injectable } from '@nestjs/common';
import { getMaxListeners } from 'events';
import { CreateRegisterDto } from './dto/create-register.dto';

@Injectable()
export class RegisterService {
  create(createRegisterDto: CreateRegisterDto) {
    return 'This action adds a new register';
  }
  name() {}
  email() {}
  password() {}
}
