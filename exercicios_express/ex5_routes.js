const express = require('express') 
const router = express.Router() // mini app q pode ser usado para mapear urls por dominio (Resource). Ex: um router para /clientes, outro para /fornecedores, etc

router.use((req,res,next) => {
    const inicio = Date.now()    
    next()
    const fim = Date.now() - inicio
    console.log(`Duração: ${Date.now() - inicio} ms`)
})

router.get('/clientes/:id', (req,res) => {
    res.json({id:req.params.id,name:'Joao'})
})

router.get('/produtos/:id', (req,res) => {
    res.json({id:req.params.id,name:'Caneta'})
})

module.exports = router