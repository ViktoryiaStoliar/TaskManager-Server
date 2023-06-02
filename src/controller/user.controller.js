const route = require('express').Router()
const { getAllUsers, getUserById, createUsers, updateUsers, deleteUserById } = require('../service/user.service')

route.get('/', async (req, res) => {
    try {
        const data = await getAllUsers()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await getUserById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body
        const data = await createUsers(name, surname, email, pwd)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, surname, email, pwd } = req.body
        const data = await updateUsers(id, name, surname, email, pwd)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await deleteUserById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = route