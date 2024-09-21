const express = require('express');
const User = require('../models/user');
const Address = require('../models/address');
const router = express.Router();

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
