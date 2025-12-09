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
exports.CreatePassagemDto = void 0;
const estado_entity_1 = require("../../estados/entities/estado.entity");
const swagger_1 = require("@nestjs/swagger");
class CreatePassagemDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePassagemDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePassagemDto.prototype, "precoIda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePassagemDto.prototype, "precoVolta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePassagemDto.prototype, "taxaEmbarque", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePassagemDto.prototype, "conexoes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePassagemDto.prototype, "tempoVoo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", estado_entity_1.Estado)
], CreatePassagemDto.prototype, "origem", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", estado_entity_1.Estado)
], CreatePassagemDto.prototype, "destino", void 0);
exports.CreatePassagemDto = CreatePassagemDto;
//# sourceMappingURL=create-passagem.dto.js.map