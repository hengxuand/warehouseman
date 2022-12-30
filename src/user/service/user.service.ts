import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { User } from '../models/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findOne(uuid: string): Promise<User> {
    return await this.userRepository.findOne({ where: { uuid: uuid } });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async deleteOne(uuid: string): Promise<any> {
    return await this.userRepository.delete(uuid);
  }

  async updateOne(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
