import express, { Request, Response } from 'express';
import mysql from 'mysql';
require('dotenv').config();
const app = express();

let connection: mysql.Connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DB
    });
}

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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
