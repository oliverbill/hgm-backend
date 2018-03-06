const fs = require('fs') // qdo é modulo do node (externo) nao precisa de caminho relativo

const files = fs.readdirSync(__dirname) // __dirname é um atibuto global q o node já inicializa

files.forEach(f => {
    console.log(f)
});

