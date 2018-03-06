const lodash = require('lodash')

const alunos = [
    {
        nome:'Joao',
        nota:8.9
    }
    ,
    {
        nome:'Maria',
        nota:10
    }
    ,
    {
        nome:'Pedro',
        nota:8.1
    }
]

const media = lodash.sumBy(alunos,'nota') / alunos.length
console.log(media)