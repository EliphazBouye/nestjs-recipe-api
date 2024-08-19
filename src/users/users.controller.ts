import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { RemovePasswordInterceptor } from './utils/removepassword.interceptor';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(RemovePasswordInterceptor)
  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: User
  })
  async findAll() {
    return await this.usersService.users()
  }

  @Post()
  @ApiResponse({
    status: 200,
    description: 'User created',
    type: User
  })
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }
}
