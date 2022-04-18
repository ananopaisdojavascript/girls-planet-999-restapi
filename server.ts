import express, { Request, Response } from 'express';
import mysql from 'mysql';
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB
});

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB
});

app.get('/participants', (request: Request, response: Response) => {
    const query = 'SELECT * FROM participants'
    connection.query(query, (error, rows) => {
        if (error) throw error;
        const returnValue = {
            data: rows,
            message: rows.length === 0 ? "No Record Found" : null
        }
        return response.send(returnValue)
    })
})

app.get('/participants/:id', (request: Request, response: Response) => {
    const id = request.params.id
    const query = `SELECT * FROM participants WHERE ID = ${id} LIMIT 1`
    connection.query(query, (error, rows) => {
        if (error) throw error;
        const returnValue = {
            data: rows.length > 0 ? rows[0] : null,
            message: rows.length === 0 ? "No Record Found" : null
        }
        return response.send(returnValue)
    })
})

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

app.listen(port, () => console.log(`Está funcionando na porta ${port}!! Uhu!!!`))