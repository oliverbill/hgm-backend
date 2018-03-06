const express = require('express') // singleton
const app = express() // NAO é singleton

const router = require('./ex5_routes')

app.use('/api', router)

app.listen(3000, () => console.log('Executando...'))