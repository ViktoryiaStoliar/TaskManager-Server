const { getAllTasksDB, createTaskDB, updataTaskDB, getTaskByIdDB, deleteTaskByIdDB } = require('../repository/task.repository');

async function getAllTasks() {
    const data = await getAllTasksDB();
    if (!data.length) throw new Error('no data');
    return data;
}

async function createTask(task, user_id) {
    const data = await createTaskDB(task, user_id);
    if (!data.length) throw new Error('task not created');
    return data;
}

async function updataTask(id, task, user_id) {
    const data = await updataTaskDB(id, task, user_id);
    if (!data.length) throw new Error('id not found');
    return data;
}

async function getTaskById(id) {
    const data = await getTaskByIdDB(id);
    if (!data.length) throw new Error('id not found');
    return data;
}

async function deleteTaskById(id, task, user_id) {
    const data = await deleteTaskByIdDB(id, task, user_id);
    if (!data.length) throw new Error('id not found');
    return data;
}

module.exports = { getAllTasks, createTask, updataTask, getTaskById, deleteTaskById };
