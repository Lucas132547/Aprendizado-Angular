import { EstadoDto } from 'src/estados/dto/estado.dto';
export declare class UserDto {
    nome: string;
    nascimento: Date;
    cpf: string;
    telefone: string;
    email: string;
    senha: string;
    genero: string;
    cidade: string;
    estado: EstadoDto;
}
