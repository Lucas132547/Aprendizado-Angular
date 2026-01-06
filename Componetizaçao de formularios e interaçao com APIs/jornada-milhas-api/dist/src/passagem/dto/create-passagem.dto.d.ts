import { Estado } from 'src/estados/entities/estado.entity';
import { TipoPassagem } from '../entities/passagem.entity';
export declare class CreatePassagemDto {
    tipo: TipoPassagem;
    precoIda: number;
    precoVolta: number;
    taxaEmbarque: number;
    conexoes: number;
    tempoVoo: number;
    origem: Estado;
    destino: Estado;
}
