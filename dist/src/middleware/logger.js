"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    const format = `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`;
    console.log(format);
    next();
};
exports.logger = logger;
//# sourceMappingURL=logger.js.map