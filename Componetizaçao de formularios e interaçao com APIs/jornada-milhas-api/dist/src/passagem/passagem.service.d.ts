import { CreatePassagemDto } from './dto/create-passagem.dto';
import { UpdatePassagemDto } from './dto/update-passagem.dto';
import { Repository } from 'typeorm';
import { Passagem } from './entities/passagem.entity';
import { QueryPassagemDto } from './dto/query-passagem.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class PassagemService {
    private repository;
    constructor(repository: Repository<Passagem>);
    create(createPassagemDto: CreatePassagemDto): Promise<CreatePassagemDto & Passagem>;
    findAll(): Promise<Passagem[]>;
    findOne(id: number): Promise<Passagem>;
    update(id: number, updatePassagemDto: UpdatePassagemDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findMinAndMaxPrecoIda(): Promise<{
        min: any;
        max: any;
    }>;
    search(queryParams: QueryPassagemDto): Promise<PaginationDto>;
}
