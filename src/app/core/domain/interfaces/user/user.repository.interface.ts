import { User } from "../../models/user/user.model";

export const USUARIO_REPOSITORIO = 'USUARIO_REPOSITORIO';

export interface UserRepositoryInterface {
  getUserById(id: string): Promise<User>;
  getUsers(user: User[]): Promise<User[]>;
}
