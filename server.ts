import express, { Request, Response } from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/participants', (request: Request, response: Response) => {
    response.send("Hey!!!!!")
})

app.get('/participants/:id', (request: Request, response: Response) => {
    const id = request.params.id;
    response.send("Hey!!! " + id)
})

app.listen(port, () => console.log(`Está funcionando na porta ${port}!! Uhu!!!`))