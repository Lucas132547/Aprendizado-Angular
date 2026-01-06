import { CompanhiasService } from './companhias.service';
export declare class CompanhiasController {
    private readonly companhiasService;
    constructor(companhiasService: CompanhiasService);
    findAll(): Promise<import("./entities/companhia.entity").Companhia[]>;
}
