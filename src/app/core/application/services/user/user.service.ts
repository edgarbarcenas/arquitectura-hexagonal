import { Injectable, Inject } from '@nestjs/common';
import { UserRepositoryInterface, USUARIO_REPOSITORIO } from '../../../domain/interfaces/user/user.repository.interface';
import { User } from '../../../domain/models/user/user.model';

@Injectable()
export class UserService {
  constructor(
    @Inject(USUARIO_REPOSITORIO) private readonly userRepo: UserRepositoryInterface
  ) {}

  async getUserById(id: string): Promise<User> {
    return this.userRepo.getUserById(id);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepo.getUsers([]);
  }
}