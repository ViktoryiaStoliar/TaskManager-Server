const { getAllTasksDB, createTaskDB, updataTaskDB, getTaskByIdDB, deleteTaskByIdDB, PatchTaskDB } = require('../repository/task.repository');
const ExceptionType = require('../exception/exception');

async function getAllTasks() {
  const data = await getAllTasksDB();
  if (!data.length) throw new Error(ExceptionType.DB_GET_TASKS_NOT_FOUND);
  return data;
}

async function createTask(task, user_id) {
  const data = await createTaskDB(task, user_id);
  if (!data.length) throw new Error(ExceptionType.DB_POST_TASK_NOT_CREATE);
  return data;
}

async function updataTask(id, task, user_id) {
  const data = await updataTaskDB(id, task, user_id);
  if (!data.length) throw new Error(ExceptionType.DB_PUT_TASK_NOT_UPDATE);
  return data;
}

async function getTaskById(id) {
  const data = await getTaskByIdDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_GET__TASK_BY_ID_NOT_FOUND);
  return data;
}

async function deleteTaskById(id, task, user_id) {
  const data = await deleteTaskByIdDB(id, task, user_id);
  if (!data.length) throw new Error(ExceptionType.DB_DELETE_TASK_NOT_DELETE);
  return data;
}

async function PatchTask(id, clientData) {
  const data = await PatchTaskDB(id, clientData);
  if (!data.length) throw new Error(ExceptionType.DB_PATCH_TASK_NOT_PATCH);
  return data;
}

module.exports = { getAllTasks, createTask, updataTask, getTaskById, deleteTaskById, PatchTask };
