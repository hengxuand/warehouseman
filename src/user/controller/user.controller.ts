import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '../models/user.interface';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }
  @Get(':uuid')
  findOne(@Param('uuid') uuid: string): Promise<User> {
    return this.userService.findOne(uuid);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Delete(':uuid')
  deleteOne(@Param('uuid') uuid: string): Promise<User> {
    return this.userService.deleteOne(uuid);
  }

  @Put()
  updateOne(@Body() user: User): Promise<User> {
    return this.userService.updateOne(user);
  }
}
