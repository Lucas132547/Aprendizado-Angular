import { PromocoesService } from './promocoes.service';
export declare class PromocoesController {
    private readonly promocoesService;
    constructor(promocoesService: PromocoesService);
    findAll(): Promise<import("./entities/promocao.entity").Promocao[]>;
}
