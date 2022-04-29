const express = require('express');
const router = new express.Router();
const Cost = require('../model/cost');

router.post('/cost', (req, res) => {
    const cost = new Cost(req.body);
    
    cost.save().then((cost) => {
        res.status(201).send(cost);
    }).catch((error) => {
        res.status(400).send(error);
    }) 
});

module.exports = router;