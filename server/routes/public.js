const express = require('express')

const authenticateHandler = require('../models/handlers/authenticate');

const router = express.Router();

router.get('/api/user-verification', async(req, res) => {
    const email = req.query.email;
    const password = req.query.password;

    const response = await authenticateHandler.isUserCredentialsValid(email, password);

    res.send(response);
});

module.exports = router