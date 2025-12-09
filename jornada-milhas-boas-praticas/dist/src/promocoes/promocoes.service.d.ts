import { CreatePromocoeDto } from './dto/create-promocoe.dto';
import { UpdatePromocoeDto } from './dto/update-promocoe.dto';
import { Promocao } from './entities/promocao.entity';
import { Repository } from 'typeorm';
export declare class PromocoesService {
    private repository;
    constructor(repository: Repository<Promocao>);
    create(createPromocoeDto: CreatePromocoeDto): Promise<CreatePromocoeDto & Promocao>;
    findAll(): Promise<Promocao[]>;
    findOne(id: number): Promise<Promocao>;
    update(id: number, updatePromocoeDto: UpdatePromocoeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
