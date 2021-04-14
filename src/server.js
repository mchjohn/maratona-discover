const express = require('express')
const server = express()

const routes = require('./routes')

// usando template engine
server.set('view engine', 'ejs')

server.use(express.static('public'))

// rotas
server.use(routes)

server.listen(3000, () => console.log('Servidor rodando!'))