import { TipoPassagem } from '../entities/passagem.entity';
import { CompanhiaDto } from 'src/companhias/dto/companhia.dto';
import { EstadoDto } from 'src/estados/dto/estado.dto';
export declare class OrcamentoDto {
    descricao: string;
    preco: number;
    taxaEmbarque: number;
    total: number;
}
export declare class PassagemDto {
    tipo: TipoPassagem;
    precoIda: number;
    precoVolta: number;
    taxaEmbarque: number;
    conexoes: number;
    tempoVoo: number;
    origem: EstadoDto;
    destino: EstadoDto;
    companhia: CompanhiaDto;
    dataIda: Date;
    dataVolta: Date;
    total: number;
    orcamento: OrcamentoDto[];
}
