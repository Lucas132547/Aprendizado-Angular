import { PassagemService } from './passagem.service';
import { QueryPassagemDto } from './dto/query-passagem.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class PassagemController {
    private readonly passagemService;
    constructor(passagemService: PassagemService);
    search(queryDto: QueryPassagemDto): Promise<PaginationDto>;
}
