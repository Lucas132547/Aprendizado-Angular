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
exports.PassagemDto = exports.OrcamentoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const companhia_dto_1 = require("../../companhias/dto/companhia.dto");
const estado_dto_1 = require("../../estados/dto/estado.dto");
class OrcamentoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrcamentoDto.prototype, "descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrcamentoDto.prototype, "preco", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrcamentoDto.prototype, "taxaEmbarque", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrcamentoDto.prototype, "total", void 0);
exports.OrcamentoDto = OrcamentoDto;
class PassagemDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PassagemDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PassagemDto.prototype, "precoIda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PassagemDto.prototype, "precoVolta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PassagemDto.prototype, "taxaEmbarque", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PassagemDto.prototype, "conexoes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PassagemDto.prototype, "tempoVoo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", estado_dto_1.EstadoDto)
], PassagemDto.prototype, "origem", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", estado_dto_1.EstadoDto)
], PassagemDto.prototype, "destino", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", companhia_dto_1.CompanhiaDto)
], PassagemDto.prototype, "companhia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], PassagemDto.prototype, "dataIda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], PassagemDto.prototype, "dataVolta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PassagemDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [OrcamentoDto] }),
    __metadata("design:type", Array)
], PassagemDto.prototype, "orcamento", void 0);
exports.PassagemDto = PassagemDto;
//# sourceMappingURL=passagem.dto.js.map