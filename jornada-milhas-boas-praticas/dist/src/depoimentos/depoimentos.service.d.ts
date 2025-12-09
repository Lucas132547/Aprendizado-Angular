import { CreateDepoimentoDto } from './dto/create-depoimento.dto';
import { UpdateDepoimentoDto } from './dto/update-depoimento.dto';
import { Depoimento } from './entities/depoimento.entity';
import { Repository } from 'typeorm';
export declare class DepoimentosService {
    private repository;
    constructor(repository: Repository<Depoimento>);
    create(createDepoimentoDto: CreateDepoimentoDto): Promise<CreateDepoimentoDto & Depoimento>;
    findAll(): Promise<Depoimento[]>;
    findOne(id: number): Promise<Depoimento>;
    update(id: number, updateDepoimentoDto: UpdateDepoimentoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
