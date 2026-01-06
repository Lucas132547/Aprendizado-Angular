import { EstadoDto } from 'src/estados/dto/estado.dto';
export declare class RegisterDto {
    id: number;
    nascimento: Date;
    cpf: string;
    telefone: string;
    email: string;
    senha: string;
    destino: EstadoDto;
}
