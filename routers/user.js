const express = require('express');
const router = new express.Router();
const User = require('../model/user');

router.get('/', (req, res) => {
    res.send("Hello World");
});

router.post('/', (req, res) => {
    const user = new User(req.body);
    
    user.save().then((user) => {
        res.status(201).send(user);
    }).catch((error) => {
        res.status(400).send(error);
    }) 
});

module.exports = router;