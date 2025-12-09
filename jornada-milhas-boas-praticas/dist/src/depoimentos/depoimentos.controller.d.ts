import { DepoimentosService } from './depoimentos.service';
export declare class DepoimentosController {
    private readonly depoimentosService;
    constructor(depoimentosService: DepoimentosService);
    findAll(): Promise<import("./entities/depoimento.entity").Depoimento[]>;
}
