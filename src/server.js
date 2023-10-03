const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./database')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos',  (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai virar um JSON
})

app.put('/produtos/:id', (req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai virar um JSON
})

app.delete('/produtos/:id', (req,res,next) => {
    const produto = bancoDeDados.deleteProduto(req.params.id)
    res.send(produto) // vai virar um JSON
})

app.listen(port, () => {
    console.log(`servidor executando na porta ${port}`)
})



// res.send({nome: 'Notebook', preco: 123.45}) // converter para json autómatico pelo método send