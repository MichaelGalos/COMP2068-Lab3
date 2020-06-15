'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/michael', function (req, res) {
    res.render('michael', { title: 'Michael' });
});

router.get('/renee', function (req, res) {
    res.render('renee', { title: 'Renee' });
});

router.get('/david', function (req, res) {
    res.render('david', { title: 'David' });
});

router.get('/lucie', function (req, res) {
    res.render('lucie', { title: 'Lucie' });
});

module.exports = router;
