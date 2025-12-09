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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryPassagemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class QueryPassagemDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Buscar somente ida?',
        default: false,
        required: false,
    }),
    __metadata("design:type", Boolean)
], QueryPassagemDto.prototype, "somenteIda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Quantidade de passageiros adultos',
        default: 1,
        required: false,
    }),
    __metadata("design:type", Number)
], QueryPassagemDto.prototype, "passageirosAdultos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Quantidade de passageiros crianças',
        default: 0,
        required: false,
    }),
    __metadata("design:type", Number)
], QueryPassagemDto.prototype, "passageirosCriancas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Quantidade de passageiros bebês',
        default: 0,
        required: false,
    }),
    __metadata("design:type", Number)
], QueryPassagemDto.prototype, "passageirosBebes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo da passagem',
        enum: ['Executiva', 'Econômica'],
        required: false,
    }),
    __metadata("design:type", String)
], QueryPassagemDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Turno para realizar o voo',
        enum: ['Manhã', 'Tarde', 'Noite'],
        required: false,
    }),
    __metadata("design:type", String)
], QueryPassagemDto.prototype, "turno", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id do estado de onde o passageiro vai sair',
        required: false,
    }),
    __metadata("design:type", Number)
], QueryPassagemDto.prototype, "origemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filtrar por companhias (ids separados por virgula)',
        required: false,
    }),
    __metadata("design:type", String)
], QueryPassagemDto.prototype, "companhiasId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id do estado de onde o passageiro vai chegar',
        required: false,
    }),
    __metadata("design:type", Number)
], QueryPassagemDto.prototype, "destinoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Valor mínimo da passagem',
        required: false,
    }),
    __metadata("design:type", Number)
], QueryPassagemDto.prototype, "precoMin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Valor máximo da passagem',
        required: false,
    }),
    __metadata("design:type", Number)
], QueryPassagemDto.prototype, "precoMax", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Quantidade de conexões desejadas',
        required: false,
    }),
    __metadata("design:type", Number)
], QueryPassagemDto.prototype, "conexoes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tempo de voo máximo',
        required: false,
    }),
    __metadata("design:type", Number)
], QueryPassagemDto.prototype, "tempoVoo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data da ida',
    }),
    __metadata("design:type", String)
], QueryPassagemDto.prototype, "dataIda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data da volta',
        required: false,
    }),
    __metadata("design:type", String)
], QueryPassagemDto.prototype, "dataVolta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número da página desejada',
        default: 1,
        required: false,
    }),
    __metadata("design:type", Number)
], QueryPassagemDto.prototype, "pagina", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de passagens por página desejado',
        required: true,
    }),
    __metadata("design:type", Number)
], QueryPassagemDto.prototype, "porPagina", void 0);
exports.QueryPassagemDto = QueryPassagemDto;
//# sourceMappingURL=query-passagem.dto.js.map