const express = require('express')
const path = require('path')
const server = express()

const routes = require('./routes')

// usando template engine
server.set('view engine', 'ejs')

server.set('views', path.join(__dirname, 'views'))

// usando req.body
server.use(express.urlencoded({ extended: true }))

server.use(express.static('public'))

// rotas
server.use(routes)

server.listen(3000, () => console.log('Servidor rodando!'))