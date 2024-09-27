"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = require("dotenv");
const logger_1 = require("./middleware/logger");
const errorHandler_1 = require("./middleware/errorHandler");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.set('views', path_1.default.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express_1.default.json());
app.use(logger_1.logger);
app.use('/static', express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(errorHandler_1.errorHandler);
app.listen(port, () => {
    console.log(`server running at port ${port}`);
});
//# sourceMappingURL=index.js.map