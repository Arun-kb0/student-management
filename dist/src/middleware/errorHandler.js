"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const CustomError_1 = require("../util/CustomError");
const errorHandler = (error, req, res, next) => {
    if (error instanceof CustomError_1.CustomError) {
        console.error(error);
        res.status(error.statusCode).json(error.message);
        return;
    }
    console.error(error);
    res.status(500).json('Internal server error');
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map