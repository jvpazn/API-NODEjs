const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let pessoas = [
    {id : 1, nome: 'João Victor da Paz Nascimento'}, // malvinense dlc
    {id : 2, nome: 'Juan Vila Nova Rojas Moreno'}, // Paulista dlc
    {id : 3, nome: 'Rômulo de Oliveira Araujo Siqueira'} // romulo dlc

];

app.listen(port, () => {
    console.log(`Servidor em execução: http://localhost:${port}`);
});

app.get("/pessoas", (req,res) => res.json(pessoas));

app.get("/pessoas/:id", (req,res) => {
const id = parseInt(req.params.id);
const pessoa = pessoas.find(p => p.id === id);

if(pessoa){
    res.json(pessoa)
}else{
    res.status(404).json({error : 'Pessoa Não Encontrada.'})
}
});

app.post('/pessoas', (req, res) => {
    const nome = req.body.nome;

    const novaPessoa = {
        id: pessoas.length + 1,
        nome: nome
    }

    pessoas.push(novaPessoa);
    res.status(201).json(novaPessoa)
});

app.put('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome } = req.body;
    const pessoa = pessoas.find(p => p.id === id);
    if(pessoa) {
        pessoa.nome= nome;
        res.json(pessoa)

    } else {
        res.status(404).json( {error: 'Pessoa não encontrada'})
    }
});

app.delete('/pessoas/:id', (req, res) => { 
    const id = parseInt(req.params.id);
    const index = pessoas.findIndex(p => p.id === id); // INDEX LIBRARY OF RUINA??!?!??!?!?!?

    if(index !== -1){
        const pessoaDeletada = pessoas.splice(index, 1);
        res.json(pessoaDeletada[0])
    } else {
        res.status(404).json( {error: 'Pessoa não encontrada'})
    }
})


