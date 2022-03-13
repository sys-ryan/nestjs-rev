import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {
    // Check if the email is in use
    const users = await this.usersService.find(email);
    if (users.length) {
      throw new BadRequestException('Email in use.');
    }

    // Hash the user's password
    // 1. Generate a salt
    const salt = randomBytes(8).toString('hex');

    // 2. Hash the salt and the password together
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    // 3. Join the hased result and teh salt together
    const hashedPassword = `${salt}.${hash.toString('hex')}`;

    // Create a new user and save it
    const user = await this.usersService.create(email, hashedPassword);

    // return the user
    return user;
  }

  signin() {}
}
