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
exports.Passagem = void 0;
const companhia_entity_1 = require("../../companhias/entities/companhia.entity");
const estado_entity_1 = require("../../estados/entities/estado.entity");
const typeorm_1 = require("typeorm");
let Passagem = class Passagem {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Passagem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Passagem.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Passagem.prototype, "precoIda", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Passagem.prototype, "precoVolta", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Passagem.prototype, "taxaEmbarque", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Passagem.prototype, "conexoes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Passagem.prototype, "tempoVoo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estado_entity_1.Estado),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", estado_entity_1.Estado)
], Passagem.prototype, "origem", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estado_entity_1.Estado),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", estado_entity_1.Estado)
], Passagem.prototype, "destino", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => companhia_entity_1.Companhia),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", companhia_entity_1.Companhia)
], Passagem.prototype, "companhia", void 0);
Passagem = __decorate([
    (0, typeorm_1.Entity)()
], Passagem);
exports.Passagem = Passagem;
//# sourceMappingURL=passagem.entity.js.map