var express = require('express'),
    auth = {};

auth.verify = function (req, res, next) {
    var h = req.headers;
    if (h && h['auth']) {
        next()
        return
    }

    res.status(401).json({
        message: 'Você não tem permissão para acessar essa funcionalidade.'
    })
}

module.exports = auth