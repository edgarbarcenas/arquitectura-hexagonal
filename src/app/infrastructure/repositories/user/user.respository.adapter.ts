import { Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '../../../core/domain/interfaces/user/user.repository.interface';
import { User } from '../../../core/domain/models/user/user.model';

@Injectable()
export class UsersRepository implements UserRepositoryInterface {
  constructor() {}

  async getUserById(id: string): Promise<User> {
    //En una aplicación real, aquí se haría una consulta a la base de datos para obtener el usuario con el id proporcionado
    const usuario = { id: '1', name: 'Usuario 1', mail: 'jose@gmail.com' };
    if (!usuario) throw new Error('Usuario no encontrado');
    return new User(usuario.id, usuario.name, usuario.mail);
  }

  async getUsers(user: User[]): Promise<User[]> {
    //En una aplicación real, aquí se haría una consulta a la base de datos para obtener todos los usuarios
    const usuarios = [
      { id: '1', name: 'Usuario 1', mail: 'as' },
      { id: '2', name: 'Usuario 2', mail: 'as' },
    ]
    return usuarios.map(usuario => new User(usuario.id, usuario.name, usuario.mail));
  }
}