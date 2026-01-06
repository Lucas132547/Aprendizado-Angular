"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanhiasModule = void 0;
const common_1 = require("@nestjs/common");
const companhias_service_1 = require("./companhias.service");
const companhias_controller_1 = require("./companhias.controller");
const typeorm_1 = require("@nestjs/typeorm");
const companhia_entity_1 = require("./entities/companhia.entity");
let CompanhiasModule = class CompanhiasModule {
};
CompanhiasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([companhia_entity_1.Companhia])],
        controllers: [companhias_controller_1.CompanhiasController],
        providers: [companhias_service_1.CompanhiasService],
    })
], CompanhiasModule);
exports.CompanhiasModule = CompanhiasModule;
//# sourceMappingURL=companhias.module.js.map