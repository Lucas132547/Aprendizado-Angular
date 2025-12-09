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
exports.DepoimentosController = void 0;
const common_1 = require("@nestjs/common");
const depoimentos_service_1 = require("./depoimentos.service");
const swagger_1 = require("@nestjs/swagger");
const depoimento_dto_1 = require("./dto/depoimento.dto");
let DepoimentosController = class DepoimentosController {
    constructor(depoimentosService) {
        this.depoimentosService = depoimentosService;
    }
    findAll() {
        return this.depoimentosService.findAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        type: depoimento_dto_1.DepoimentoDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DepoimentosController.prototype, "findAll", null);
DepoimentosController = __decorate([
    (0, common_1.Controller)('depoimentos'),
    __metadata("design:paramtypes", [depoimentos_service_1.DepoimentosService])
], DepoimentosController);
exports.DepoimentosController = DepoimentosController;
//# sourceMappingURL=depoimentos.controller.js.map