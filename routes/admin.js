const express = require("express");
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();
const users = [];

router.get('/add-user', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-user.html'));
    
});
router.post('/users', (req, res, next) => {
    console.log(req.body);
    users.push(req.body)
    res.redirect('/');
    
});

module.exports = router;