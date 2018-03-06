const express = require('express')
const app = express()

app.get('/',function(req,res,next){
    console.log('Inicio')
    next()
    console.log('Fim')
})

app.get('/',function(req,res){
    console.log('outro middleware')
    res.send('<h2> Encadeando middlewares </h2>')
})

// qq url q comece com "/api". Pode ser "/api/blabla"
app.use('/api',function(req,res){
    console.log('API')
    res.send('<h2> API </h2>')
})

app.listen(3000, () => console.log('Executando'))