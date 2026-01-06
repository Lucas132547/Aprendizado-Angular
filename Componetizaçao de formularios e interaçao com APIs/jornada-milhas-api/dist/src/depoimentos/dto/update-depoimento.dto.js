"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDepoimentoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_depoimento_dto_1 = require("./create-depoimento.dto");
class UpdateDepoimentoDto extends (0, mapped_types_1.PartialType)(create_depoimento_dto_1.CreateDepoimentoDto) {
}
exports.UpdateDepoimentoDto = UpdateDepoimentoDto;
//# sourceMappingURL=update-depoimento.dto.js.map