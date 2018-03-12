const restful = require('node-restful')
const mongoose = restful.mongoose

const blindSchema = new mongoose.Schema({
    nivel: {type:Number, min:1, required:true},
    small: {type:Number, required:true},
    big: {type:Number, required:true},
    intervaloEmMinutos: {type:Number, required:true},
})

const enderecoSchema = new mongoose.Schema({
    logradouro: {type:String,required:true},
    bairro: {type:String,required:true},
    cidade: {type:String,required:true,default:'São Paulo'},
    estado: {type:String,required:true,default:'SP'}    
})

const jogadorSchema = new mongoose.Schema({
    endereco: [enderecoSchema],
    nome: {type:String,required:true},
    idade: {type:Number,required:true,min:18},
    apelido: {type:String},
    apartamentoBloco: {type:String,required:true},
})

const rateioSchema = new mongoose.Schema({
    descricao: {type:String,required:true},
    valor: {type:Number,required:true},
    jogadoresPagos: [jogadorSchema],
    jogadoresPendentes: [jogadorSchema],
})

const etapaSchema = new mongoose.Schema({    
    nome: {type:String,required: true},
    blinds: [blindSchema],
    jogadores: [jogadorSchema],
    stackInicial: {type:Number,required:true},
    buyin: {type:Number,required:true},
    addOn: {type:Number},
    rateios: [rateioSchema],
    nivelStopRebuy: {type:Number, required:true},
    timeBankInMinutes: {type:Number, default: 1}
})

module.exports = restful.model('EtapaModel', etapaSchema)
