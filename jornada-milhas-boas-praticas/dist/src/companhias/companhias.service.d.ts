import { CreateCompanhiaDto } from './dto/create-companhia.dto';
import { UpdateCompanhiaDto } from './dto/update-companhia.dto';
import { Companhia } from './entities/companhia.entity';
import { Repository } from 'typeorm';
export declare class CompanhiasService {
    private repository;
    constructor(repository: Repository<Companhia>);
    create(createCompanhiaDto: CreateCompanhiaDto): Promise<CreateCompanhiaDto & Companhia>;
    findAll(): Promise<Companhia[]>;
    findOne(id: number): Promise<Companhia>;
    update(id: number, updateCompanhiaDto: UpdateCompanhiaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
