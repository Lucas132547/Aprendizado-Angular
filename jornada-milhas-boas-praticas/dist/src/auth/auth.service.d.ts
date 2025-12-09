import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dto/user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(email: string, senha: string): Promise<any>;
    cadastro(userDto: UserDto): Promise<any>;
    find(email: string): Promise<any>;
    update(email: string, userDto: UserDto): Promise<any>;
}
