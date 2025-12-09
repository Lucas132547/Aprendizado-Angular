import { Estado } from 'src/estados/entities/estado.entity';
export declare class User {
    id: number;
    nome: string;
    nascimento: Date;
    cpf: string;
    telefone: string;
    email: string;
    senha: string;
    genero: string;
    cidade: string;
    estado: Estado;
}
