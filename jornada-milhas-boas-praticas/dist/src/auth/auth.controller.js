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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const login_dto_1 = require("./dto/login.dto");
const auth_guard_1 = require("./guards/auth.guard");
const user_dto_1 = require("../users/dto/user.dto");
const swagger_1 = require("@nestjs/swagger");
const token_dto_1 = require("./dto/token.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signIn(signInDto) {
        return this.authService.signIn(signInDto.email, signInDto.senha);
    }
    async cadastro(userDto) {
        const dbUser = await this.authService.find(userDto.email);
        if (dbUser) {
            throw new common_1.BadRequestException({
                erro: 'E-mail já utilizado.',
            });
        }
        return this.authService.cadastro(userDto);
    }
    async perfil(req) {
        const user = await this.authService.find(req.user.email);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
    async atualizar(userDto, req) {
        await this.authService.update(req.user.email, userDto);
        return this.authService.signIn(userDto.email, userDto.senha);
    }
};
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({
        type: token_dto_1.TokenDto,
    }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('cadastro'),
    (0, swagger_1.ApiOkResponse)({
        type: user_dto_1.UserDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "cadastro", null);
__decorate([
    (0, common_1.Get)('perfil'),
    (0, swagger_1.ApiOkResponse)({
        type: user_dto_1.UserDto,
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "perfil", null);
__decorate([
    (0, common_1.Patch)('perfil'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "atualizar", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map