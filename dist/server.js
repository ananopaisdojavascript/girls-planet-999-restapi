"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/participants', (request, response) => {
    response.send("Hey!!!!!");
});
app.get('/participants/:id', (request, response) => {
    const id = request.params.id;
    response.send("Hey!!! " + id);
});
app.listen(port, () => console.log(`Está funcionando na porta ${port}!! Uhu!!!`));
