"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCompanhiaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_companhia_dto_1 = require("./create-companhia.dto");
class UpdateCompanhiaDto extends (0, mapped_types_1.PartialType)(create_companhia_dto_1.CreateCompanhiaDto) {
}
exports.UpdateCompanhiaDto = UpdateCompanhiaDto;
//# sourceMappingURL=update-companhia.dto.js.map