"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateDto = void 0;
const user_dto_1 = require("./user.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class UserUpdateDto extends (0, mapped_types_1.PartialType)(user_dto_1.UserDto) {
}
exports.UserUpdateDto = UserUpdateDto;
//# sourceMappingURL=user-update.dto.js.map