var express = require('express');
var router = express.Router();
var contacts = require('../controllers/contacts.controller');
var auth = require('../controllers/auth.controller');

router.route('/')
    .all(function (req, res, next) {
        auth.verify(req, res, next);
    })
    .get(function (req, res, next) {
        contacts.list(req, res);
    })
    .post(function (req, res, next) {
        contacts.create(req, res);
    });

router.route(['/:size', '/:size/:page'])
    .all(function (req, res, next) {
        auth.verify(req, res, next);
    })
    .get(function (req, res, next) {
        contacts.list(req, res);
    });

router.route('/:idContato')
    .all(function (req, res, next) {
        auth.verify(req, res, next);
    })
    .get(function (req, res, next) {
        contacts.get(req, res);
    })
    .put(function (req, res, next) {
        contacts.update(req, res);
    })
    .delete(function (req, res, next) {
        contacts.delete(req, res);
    });

module.exports = router;
