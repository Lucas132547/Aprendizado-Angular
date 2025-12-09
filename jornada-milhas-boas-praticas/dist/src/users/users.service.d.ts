import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';
export declare class UsersService {
    private repository;
    constructor(repository: Repository<User>);
    findOne(email: string): Promise<User>;
    create(userDto: UserDto): Promise<UserDto & User>;
    update(id: number, updateUserDto: UserDto): Promise<import("typeorm").UpdateResult>;
}
