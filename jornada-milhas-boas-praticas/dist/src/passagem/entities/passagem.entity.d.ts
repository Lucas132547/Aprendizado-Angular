import { Companhia } from 'src/companhias/entities/companhia.entity';
import { Estado } from 'src/estados/entities/estado.entity';
export type TipoPassagem = 'Executiva' | 'Econômica';
export declare class Passagem {
    id: number;
    tipo: TipoPassagem;
    precoIda: number;
    precoVolta: number;
    taxaEmbarque: number;
    conexoes: number;
    tempoVoo: number;
    origem: Estado;
    destino: Estado;
    companhia: Companhia;
}
