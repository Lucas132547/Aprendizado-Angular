import { TipoPassagem } from '../entities/passagem.entity';
export declare class QueryPassagemDto {
    somenteIda?: boolean;
    passageirosAdultos?: number;
    passageirosCriancas?: number;
    passageirosBebes?: number;
    tipo?: TipoPassagem;
    turno?: string;
    origemId?: number;
    companhiasId?: string;
    destinoId?: number;
    precoMin?: number;
    precoMax?: number;
    conexoes?: number;
    tempoVoo?: number;
    dataIda: string;
    dataVolta?: string;
    pagina: number;
    porPagina: number;
}
