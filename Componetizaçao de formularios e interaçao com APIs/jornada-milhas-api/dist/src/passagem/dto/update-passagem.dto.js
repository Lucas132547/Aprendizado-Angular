"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePassagemDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_passagem_dto_1 = require("./create-passagem.dto");
class UpdatePassagemDto extends (0, mapped_types_1.PartialType)(create_passagem_dto_1.CreatePassagemDto) {
}
exports.UpdatePassagemDto = UpdatePassagemDto;
//# sourceMappingURL=update-passagem.dto.js.map