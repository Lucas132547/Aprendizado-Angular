import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { Estado } from './entities/estado.entity';
import { Repository } from 'typeorm';
export declare class EstadosService {
    private repository;
    constructor(repository: Repository<Estado>);
    create(createEstadoDto: CreateEstadoDto): Promise<CreateEstadoDto & Estado>;
    findAll(): Promise<Estado[]>;
    findOne(id: number): Promise<Estado>;
    update(id: number, updateEstadoDto: UpdateEstadoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
