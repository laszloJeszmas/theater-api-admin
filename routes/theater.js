var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('add', { title: 'Express' });
});

router.post('/add', function(req, res, next) {
});

module.exports = router;
