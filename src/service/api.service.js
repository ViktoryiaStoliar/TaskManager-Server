const { createUserDB, getUserByEmailDB } = require('../repository/api.repository');
const bcrypt = require('bcrypt');

const saltround = 4;

async function createUser(name, surname, email, pwd) {
  const foundUser = await getUserByEmailDB(email);
  if (foundUser.length) throw new Error('email already exist');

  const hashedPassword = await bcrypt.hash(pwd, saltround);

  const data = await createUserDB(name, surname, email, hashedPassword);
  if (!data.length) throw new Error('Data is not found');
  return data;
}

async function authorisationUser(email, pwd) {
  const findUser = await getUserByEmailDB(email);
  if (!findUser.length) throw new Error('email doesn`t exist');
  const bool = await bcrypt.compare(pwd, findUser[0].pwd);
  if (!bool) throw new Error('pwd not match!');
  return findUser;
}

module.exports = { createUser, authorisationUser };
