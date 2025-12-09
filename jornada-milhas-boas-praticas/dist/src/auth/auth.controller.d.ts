import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UserDto } from 'src/users/dto/user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: LoginDto): Promise<any>;
    cadastro(userDto: UserDto): Promise<any>;
    perfil(req: any): Promise<any>;
    atualizar(userDto: UserDto, req: any): Promise<any>;
}
