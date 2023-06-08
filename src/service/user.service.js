const { getAllUsersDB, getUserByIdDB, createUsersDB, updateUsersDB, deleteUserByIdDB, PatchDataDB } = require('../repository/user.repository');
const ExceptionType = require('../exception/exception');

async function getAllUsers() {
  const data = await getAllUsersDB();
  if (!data.length) throw new Error(ExceptionType.DB_GET_USERS_NOT_FOUND);
  return data;
}

async function getUserById(id) {
  const data = await getUserByIdDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_GET__USER_BY_ID_NOT_FOUND);
  return data;
}

async function createUsers(name, surname, email, pwd) {
  const data = await createUsersDB(name, surname, email, pwd);
  if (!data.length) throw new Error(ExceptionType.DB_POST_USER_NOT_CREATE);
  return data;
}

async function updateUsers(id, name, surname, email, pwd) {
  const data = await updateUsersDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error(ExceptionType.DB_PUT_USER_NOT_UPDATE);
  return data;
}

async function deleteUserById(id) {
  const data = await deleteUserByIdDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_DELETE_USER_NOT_DELETE);
  return data;
}

async function PatchData(id, clientData) {
  const data = await PatchDataDB(id, clientData);
  if (!data.length) throw new Error(ExceptionType.DB_PATCH_USER_NOT_PATCH);
  return data;
}

module.exports = { getAllUsers, getUserById, createUsers, updateUsers, deleteUserById, PatchData };
