"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const client_1 = require("@prisma/client");
exports.prismaClient = new client_1.PrismaClient();
async function main() {
}
main()
    .then(async () => {
    await exports.prismaClient.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await exports.prismaClient.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=prismaClient.js.map