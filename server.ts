import express, { Request, Response } from 'express';
import mysql from 'mysql';
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3036;
let connection;

if(process.env.CLEARDB_DATABASE_URL) {
    connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL)
} else {
    connection = mysql.createConnection({ 
        host: process.env.DATABASE_HOST, 
        user: process.env.DATABASE_USER, 
        password: process.env.DATABASE_PASSWORD, 
        database: process.env.DATABASE_DB 
    });
}

app.get('/participants', (request: Request, response: Response) => {
    response.send("Hey!!!!!")
})

app.get('/participants/:id', (request: Request, response: Response) => {
    const id = request.params.id;
    response.send("Hey!!! " + id)
})

app.listen(port, () => console.log(`Está funcionando na porta ${port}!! Uhu!!!`))
