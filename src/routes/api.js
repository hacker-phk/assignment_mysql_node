const express = require('express');
const User = require('../models/user');
const Address = require('../models/address');
const router = express.Router();

router.get('/user/:id', async (req, res) => {
    const userId = req.params.id;
    
    try {
        const user = await User.findOne({
            where: { id: userId },  // or { name: req.params.name } for finding by name
            include: Address
        });
        
        if (!user) {
            return res.status(404).send('User not found');
        }
        
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send('Error occurred: ' + error.message);
    }
});

router.get('/user/name/:name', async (req, res) => {
    const userName = req.params.name;

    try {
        const user = await User.findOne({
            where: { name: userName },
            include: Address
        });

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send('Error occurred: ' + error.message);
    }
});

router.post('/submit', async (req, res) => {
    const { name, address } = req.body;

    try {
        const user = await User.create({ name });
        await Address.create({ address, UserId: user.id });
        res.status(201).send('User and Address created successfully');
    } catch (error) {
        res.status(500).send('Error occurred: ' + error.message);
    }
});

module.exports = router;
