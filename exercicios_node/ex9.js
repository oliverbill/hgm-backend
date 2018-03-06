process.stdout.write('Esta gostando do curso ?')

// evento 'data' é disparado qdo usuario digita no console e tecla enter
process.stdin.on('data',function(data){
    process.stdout.write(`sua resposta foi: ${data.toString()}\n `)
    process.exit()
})