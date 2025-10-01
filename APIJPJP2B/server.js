const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let pessoas = [
    {id : 1, nome: 'Pessoa 1'},
    {id : 2, nome: 'Pessoa 2'},
    {id : 3, nome: 'Pessoa 3'}

];

app.listen(port, () => {
    console.log(`Servidor em execução: http://localhost:${port}`);
});
