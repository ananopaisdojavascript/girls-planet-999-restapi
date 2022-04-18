"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const app = (0, express_1.default)();
require('dotenv').config();
const port = process.env.PORT || 3000;
let connection;
if (process.env.CLEARDB_DATABASE_URL) {
    connection = mysql_1.default.createConnection(process.env.CLEARDB_DATABASE_URL);
}
else {
    connection = mysql_1.default.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DB
    });
}
app.get('/participants', (request, response) => {
    response.send("Hey!!!!!");
});
app.get('/participants/:id', (request, response) => {
    const id = request.params.id;
    response.send("Hey!!! " + id);
});
app.listen(port, () => console.log(`Está funcionando na porta ${port}!! Uhu!!!`));
