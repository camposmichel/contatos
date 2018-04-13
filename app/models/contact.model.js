'use strict';

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ContactSchema = new Schema({
    nome: {
        type: String,
        trim: true,
        required: 'Nome é obrigatório'
    },
    canal: {
        type: String,
        trim: true,
        required: 'Canal é obrigatório'
    },
    valor: {
        type: String,
        trim: true,
        required: 'Valor é obrigatório'
    },
    obs: {
        type: String,
        trim: true
    }
})

mongoose.model('Contatos', ContactSchema)
