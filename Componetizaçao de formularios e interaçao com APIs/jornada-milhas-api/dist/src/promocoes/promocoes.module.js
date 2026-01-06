"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromocoesModule = void 0;
const common_1 = require("@nestjs/common");
const promocoes_service_1 = require("./promocoes.service");
const promocoes_controller_1 = require("./promocoes.controller");
const typeorm_1 = require("@nestjs/typeorm");
const promocao_entity_1 = require("./entities/promocao.entity");
let PromocoesModule = class PromocoesModule {
};
PromocoesModule = __decorate([
    (0, common_1.Module)({
        controllers: [promocoes_controller_1.PromocoesController],
        providers: [promocoes_service_1.PromocoesService],
        imports: [typeorm_1.TypeOrmModule.forFeature([promocao_entity_1.Promocao])],
    })
], PromocoesModule);
exports.PromocoesModule = PromocoesModule;
//# sourceMappingURL=promocoes.module.js.map