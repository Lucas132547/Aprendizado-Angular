"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassagemService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const passagem_entity_1 = require("./entities/passagem.entity");
let PassagemService = class PassagemService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createPassagemDto) {
        return this.repository.save(createPassagemDto);
    }
    findAll() {
        return this.repository.find();
    }
    findOne(id) {
        return this.repository.findOneBy({ id });
    }
    update(id, updatePassagemDto) {
        return this.repository.update(id, updatePassagemDto);
    }
    remove(id) {
        return this.repository.delete(id);
    }
    async findMinAndMaxPrecoIda() {
        const [minResult, maxResult] = await Promise.all([
            this.repository
                .createQueryBuilder('passagem')
                .where('precoIda > 0')
                .select('MIN(passagem.precoIda)', 'min')
                .getRawOne(),
            this.repository
                .createQueryBuilder('passagem')
                .select('MAX(passagem.precoIda)', 'max')
                .getRawOne(),
        ]);
        return { min: minResult.min, max: maxResult.max };
    }
    async search(queryParams) {
        const query = this.repository.createQueryBuilder('passagem');
        query.leftJoinAndSelect('passagem.origem', 'origem');
        query.leftJoinAndSelect('passagem.destino', 'destino');
        query.leftJoinAndSelect('passagem.companhia', 'companhia');
        query.where('passagem.id > 0');
        if (queryParams.tipo) {
            query.andWhere('passagem.tipo = :tipo');
        }
        if (queryParams.origemId) {
            query.andWhere('passagem.origemId = :origemId');
        }
        if (queryParams.destinoId) {
            query.andWhere('passagem.destinoId = :destinoId');
        }
        if (queryParams.precoMin) {
            query.andWhere('passagem.precoIda >= :precoMin');
        }
        if (queryParams.precoMax) {
            query.andWhere('passagem.precoIda <= :precoMax');
        }
        if (queryParams.conexoes >= 0) {
            const conexoesAndWhere = queryParams.conexoes > 2
                ? '(passagem.conexoes >= :conexoes)'
                : '(passagem.conexoes = :conexoes)';
            query.andWhere(conexoesAndWhere);
        }
        if (queryParams.companhiasId && queryParams.companhiasId.length) {
            const idsArray = queryParams.companhiasId
                .split(',')
                .map((id) => Number(id));
            query.andWhere('companhia.id IN (:...ids)', { ids: idsArray });
        }
        query.limit(queryParams.porPagina);
        const porPagina = queryParams.porPagina;
        const pagina = queryParams.pagina;
        const offset = (pagina - 1) * porPagina;
        query.offset(offset);
        query.setParameters(queryParams);
        const range = await this.findMinAndMaxPrecoIda();
        return query.getManyAndCount().then(([result, total]) => {
            const ultimaPagina = Math.ceil(total / porPagina);
            const paginaAtual = queryParams.pagina;
            const paginationDto = {
                paginaAtual,
                ultimaPagina,
                total,
                precoMin: range.min,
                precoMax: range.max,
                resultado: result.map((passagem) => {
                    let totalPassagens = 0;
                    const orcamento = [];
                    if (queryParams.passageirosAdultos > 0) {
                        const ida = passagem.precoIda * queryParams.passageirosAdultos;
                        const volta = queryParams.somenteIda
                            ? 0
                            : passagem.precoVolta * queryParams.passageirosAdultos;
                        const preco = ida + volta;
                        totalPassagens += preco + passagem.taxaEmbarque;
                        const detalhes = {
                            descricao: `${queryParams.passageirosAdultos} adulto${queryParams.passageirosAdultos > 1 ? 's' : ''}, ${passagem.tipo.toLowerCase()}`,
                            preco,
                            taxaEmbarque: passagem.taxaEmbarque,
                            total: preco + passagem.taxaEmbarque,
                        };
                        orcamento.push(detalhes);
                    }
                    if (queryParams.passageirosCriancas > 0) {
                        const ida = passagem.precoIda * queryParams.passageirosCriancas;
                        const volta = queryParams.somenteIda
                            ? 0
                            : passagem.precoVolta * queryParams.passageirosCriancas;
                        const preco = ida + volta;
                        totalPassagens += preco + passagem.taxaEmbarque;
                        const detalhes = {
                            descricao: `${queryParams.passageirosCriancas} criança${queryParams.passageirosCriancas > 1 ? 's' : ''}, ${passagem.tipo.toLowerCase()}`,
                            preco,
                            taxaEmbarque: passagem.taxaEmbarque,
                            total: preco + passagem.taxaEmbarque,
                        };
                        orcamento.push(detalhes);
                    }
                    if (queryParams.passageirosBebes > 0) {
                        const ida = passagem.precoIda * queryParams.passageirosBebes;
                        const volta = queryParams.somenteIda
                            ? 0
                            : passagem.precoVolta * queryParams.passageirosBebes;
                        const preco = ida + volta;
                        totalPassagens += preco + passagem.taxaEmbarque;
                        const detalhes = {
                            descricao: `${queryParams.passageirosBebes} bebê${queryParams.passageirosBebes > 1 ? 's' : ''}, ${passagem.tipo.toLowerCase()}`,
                            preco,
                            taxaEmbarque: passagem.taxaEmbarque,
                            total: preco + passagem.taxaEmbarque,
                        };
                        orcamento.push(detalhes);
                    }
                    return Object.assign(Object.assign({}, passagem), { dataIda: new Date(queryParams.dataIda), dataVolta: queryParams.dataVolta
                            ? new Date(queryParams.dataVolta)
                            : null, orcamento, total: totalPassagens });
                }),
            };
            return paginationDto;
        });
    }
};
PassagemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(passagem_entity_1.Passagem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PassagemService);
exports.PassagemService = PassagemService;
//# sourceMappingURL=passagem.service.js.map