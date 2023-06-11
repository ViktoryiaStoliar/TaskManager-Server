const route = require('express').Router();
const { createUser, authorisationUser } = require('../service/api.service')
const { buildResponse } = require('../helper/buildResponse');

route.post('/reg', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body
        const data = await createUser(name, surname, email, pwd);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
})

route.post('/auth', async (req, res) => {
    try {
        const { email, pwd } = req.body
        const data = await authorisationUser(email, pwd)
        buildResponse(res, 200, data)
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
})

module.exports = route