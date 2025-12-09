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
exports.PassagemController = void 0;
const common_1 = require("@nestjs/common");
const passagem_service_1 = require("./passagem.service");
const query_passagem_dto_1 = require("./dto/query-passagem.dto");
const pagination_dto_1 = require("./dto/pagination.dto");
const swagger_1 = require("@nestjs/swagger");
let PassagemController = class PassagemController {
    constructor(passagemService) {
        this.passagemService = passagemService;
    }
    search(queryDto) {
        return this.passagemService.search(queryDto);
    }
};
__decorate([
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOkResponse)({
        type: pagination_dto_1.PaginationDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_passagem_dto_1.QueryPassagemDto]),
    __metadata("design:returntype", Promise)
], PassagemController.prototype, "search", null);
PassagemController = __decorate([
    (0, common_1.Controller)('passagem'),
    __metadata("design:paramtypes", [passagem_service_1.PassagemService])
], PassagemController);
exports.PassagemController = PassagemController;
//# sourceMappingURL=passagem.controller.js.map