const express = require ("express");
const app = express();


//Habilitar o processamento de JSON
app.use(express.json())

app.get("/", function(req, res){
    res.send("Hello World");
});

// endpoint/oi
app.get('/oi', function(req, res){
    res.send('Ola, mundo!');
})

// lista
const lista = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];

// Real All -> [GET] /Herois
app.get("/herois", function (req, res){
    res.send(lista.filter(Boolean));
})

// Create -> [POST] /herois
app.post("/herois", function(req, res){
    //debug apenas para verificar se esta recebendo a requisicao
    const item = req.body.nome;
    //Inseri o item na lista
    lista.push(item);
    //Envia uma resposta de sucesso para o frontend
    res.send("Item adicinado com sucesso");
})

//Read by ID -> [GET] /herois/:id
app.get("/herois/:id", function(req, res){
    //pegamos inicialmente o parametro de rota (id)
    const id = req.params.id - 1;

    //buscamos a informacao na lista pelo id
    const item = lista[id];

    //exibimos o item na resposta
    res.send(item);
})

//Update -> [PUT] /herois/:id
app.put("/herois/:id", function(req, res){
    //pegamos inicialmente o parametro de rota (id)
    const id = req.params.id - 1;

    //extrai o nome do corpo da requisicao
    const item = req.body.nome;

    //atualizamos na lista
    lista[id] = item

    //exibimos o item na resposta
    res.send("Item adicionado com sucesso!!");
})

//Delete -> [DELETE] /herois/:id
app.delete("/herois/:id", function(req, res){
    //Pegamos inicialmente o parametro da rota (id) que queremos remover
    const id = req.params.id-1

    //removemos da lista
    delete lista[id];

    res.send("Item Removido com sucesso!!");
})


app.listen(3000);
