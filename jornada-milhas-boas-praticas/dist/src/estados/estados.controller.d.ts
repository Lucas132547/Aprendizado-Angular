import { EstadosService } from './estados.service';
export declare class EstadosController {
    private readonly estadosService;
    constructor(estadosService: EstadosService);
    findAll(): Promise<import("./entities/estado.entity").Estado[]>;
}
