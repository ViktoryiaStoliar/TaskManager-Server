const route = require('express').Router();
const { getAllTasks, createTask, updataTask, getTaskById } = require('../service/task.service');
const { buildResponse } = require('../helper/buildResponse');

route.get('/', async (req, res) => {
    try {
        const data = await getAllTasks();
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.post('/', async (req, res) => {
    try {
        const { task, user_id } = req.body;
        const data = await createTask(task, user_id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { task, user_id } = req.body;
        const data = await updataTask(id, task, user_id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getTaskById(id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { task, user_id } = req.body;
        const data = await getTaskById(id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

module.exports = route;
