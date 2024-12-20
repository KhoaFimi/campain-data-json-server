"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
    credentials: true
}));
app.get('/', (_req, res) => {
    res.send('Hello');
});
app.listen(3001);
console.log('Server starting on port 3001');
//# sourceMappingURL=index.js.map