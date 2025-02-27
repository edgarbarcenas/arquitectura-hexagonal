import { Module } from '@nestjs/common';
import { UsuarioController } from '../../infrastructure/controllers/user/usuario.controller';
import { UserService } from '../../core/application/services/user/user.service';

import { USUARIO_REPOSITORIO } from '../../core/domain/interfaces/user/user.repository.interface';
import { UsersRepository } from 'src/app/infrastructure/repositories/user/user.respository.adapter';

@Module({
  controllers: [UsuarioController],
  providers: [
    UserService,
    { provide: USUARIO_REPOSITORIO, useClass: UsersRepository },
  ],
  exports: [UserService],
})
export class UsuarioModule {}
