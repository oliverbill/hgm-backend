const express = require('express')

const app = express()

// GET p a url raiz
app.get('/', function(req,res){
    res.send('<h1>index !!</h1>')
})

// TODOS os metodos com a url "/teste"
app.all('/teste',function(req,res){
    res.send('<h1>Teste !!</h1>')
})

// expressao regular: qq url q contem "api"(minusculo)
app.get(/api/,function(req,res){
    res.send('<h1>API !!</h1>')
})

app.listen(3000, () => console.log('Executando'))

//http://localhost:3000/teste