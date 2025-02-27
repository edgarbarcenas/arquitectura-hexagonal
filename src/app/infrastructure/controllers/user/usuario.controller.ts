import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../../../core/application/services/user/user.service';

@Controller('user')
export class UsuarioController {
  constructor(private usuarioService: UserService) {}

  @Get('all')
  async obtenerUsuarios() {
    return this.usuarioService.getUsers();
  }

  @Get(':id')
  async obtenerUsuario(@Param('id') id: string) {
    return this.usuarioService.getUserById(id);
  }
}