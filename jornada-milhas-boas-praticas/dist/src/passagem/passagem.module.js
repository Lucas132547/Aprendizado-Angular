"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassagemModule = void 0;
const common_1 = require("@nestjs/common");
const passagem_service_1 = require("./passagem.service");
const passagem_controller_1 = require("./passagem.controller");
const typeorm_1 = require("@nestjs/typeorm");
const passagem_entity_1 = require("./entities/passagem.entity");
let PassagemModule = class PassagemModule {
};
PassagemModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([passagem_entity_1.Passagem])],
        controllers: [passagem_controller_1.PassagemController],
        providers: [passagem_service_1.PassagemService],
        exports: [typeorm_1.TypeOrmModule],
    })
], PassagemModule);
exports.PassagemModule = PassagemModule;
//# sourceMappingURL=passagem.module.js.map