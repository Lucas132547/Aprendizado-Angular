import { PassagemDto } from './passagem.dto';
export declare class PaginationDto {
    paginaAtual: number;
    ultimaPagina: number;
    total: number;
    precoMin: number;
    precoMax: number;
    resultado: PassagemDto[];
}
