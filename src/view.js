var express = require("express"),
    router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
    console.log("Root page hit!")
    res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router.get('/webxr', function(req, res) {
    console.log("Root page hit!")
    res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router.get('/webxr', function(req, res) {
    console.log("Root page hit!")
    res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router.get('/webxr', function(req, res) {
    console.log("Root page hit!")
    res.sendFile(path.join(__dirname + '/../views/index.html'));
});

module.exports = router;