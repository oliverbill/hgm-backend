const express = require('express')

module.exports = function(server) {

  // API Routes
  const router = express.Router()
  server.use('/api', router)

  // rotas da API
  const etapaService = require('../api/etapa/etapaService')
  etapaService.register(router, '/etapas')
}