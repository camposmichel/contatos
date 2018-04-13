var express = require('express'),
mongoose = require('mongoose'),
Contatos = mongoose.model('Contatos'),
contact = {};

contact.get = function (req, res) {
    Contatos.findById(req.params.idContato, function (err, data) {
        if (err) {
            res.status(500).json({
                message: 'Houve um problema ao processar a sua requisição.'
            })
            return
        }

        if (data) {
            res.json(data)
        } else {
            res.status(404).send({
                message: 'Contato não encontrado.'
            })
        }

    })
}

contact.list = function (req, res) {
    const sizeDefault = 10;
    const pageDefault = 0;

    var size = req.params && req.params.size ? parseInt(req.params.size) : sizeDefault;
    var page = req.params && req.params.page ? parseInt(req.params.page) : pageDefault;

    if (typeof size != 'number' || typeof size != 'number') {
        res.status(400).json({ message: 'Verifique os parametros enviados.' })
        return
    }

    var skip = size * page;
    Contatos
        .find()
        .limit(size)
        .skip(skip)
        .exec(function (err, data) {
            if (err) {
                res.status(500).json({
                    message: 'Houve um problema ao processar a sua requisição.'
                })
                return
            }

            if (data && data.length) {
                res.status(200).json(data);
            } else {
                res.status(404).json({
                    message: 'Dados não localizados.'
                });
            }

        })
}

contact.create = function (req, res) {
    var body = req.body;
    if (!body) {
        res.status(400).json({ message: 'Verifique os dados da sua requisição.' })
        return
    }

    Contatos.create(
        body,
        function (err, data) {
            if (err) {
                res.status(500).json({
                    message: 'Houve um problema ao processar a sua requisição.'
                })
                return
            }

            res.status(201).json(data)
        }
    )
}

contact.update = function (req, res) {
    var body = req.body;
    if (!body) {
        res.status(400).json({ message: 'Verifique os dados da sua requisição.' })
        return
    }

    Contatos.findByIdAndUpdate(
        req.params.idContato,
        body,
        function (err, data) {

            if (err) {
                res.status(500).json({
                    message: 'Houve um problema ao processar a sua requisição.'
                })
                return
            }

            res.status(204).json()
        })
}

contact.delete = function (req, res) {
    Contatos.remove({ _id: req.params.idContato }, function (err, data) {
        if (err) {
            res.status(404).json({
                message: 'Houve um problema ao processar a sua requisição.'
            })
            return
        }

        res.status(204).json()
    })
}

module.exports = contact