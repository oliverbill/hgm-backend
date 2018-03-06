const port = 3003

const parser = require('body-parser')
const express = require('express')
const server = express()

server.use(parser.urlencoded({extended:true})) // vale para todas as urls
server.use(parser.json()) // converte o corpo para json

const router = express.Router()
server.use('/api',router)

server.listen(port,() => {
    console.log(`servidor está rodando na porta ${port}.`)
})

module.exports = server