const { getAllUsersDB, getUserByIdDB, createUsersDB, updateUsersDB, deleteUserByIdDB } = require('../repository/user.repository');

async function getAllUsers() {
  const data = await getAllUsersDB();
  if (!data.length) throw new Error('no data');
  return data;
}

async function getUserById(id) {
  const data = await getUserByIdDB(id);
  if (!data.length) throw new Error('id not found');
  return data;
}

async function createUsers(name, surname, email, pwd) {
  const data = await createUsersDB(name, surname, email, pwd);
  if (!data.length) throw new Error('no data');
  return data;
}

async function updateUsers(id, name, surname, email, pwd) {
  const data = await updateUsersDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error('no data');
  return data;
}

async function deleteUserById(id) {
  const data = await deleteUserByIdDB(id);
  if (!data.length) throw new Error('id not found');
  return data;
}

module.exports = { getAllUsers, getUserById, createUsers, updateUsers, deleteUserById };
