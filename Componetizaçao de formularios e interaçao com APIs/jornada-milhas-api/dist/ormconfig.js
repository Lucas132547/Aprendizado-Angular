"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'sqlite',
    database: '.db/jornada.sqlite',
    synchronize: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
//# sourceMappingURL=ormconfig.js.map