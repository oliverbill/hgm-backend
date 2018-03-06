const http = require('http')

const server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end('<h1> Melhor usar o Express')
})

const porta = 3456
server.listen(porta,function(){
    console.log(`escutando a porta ${porta}`)
})