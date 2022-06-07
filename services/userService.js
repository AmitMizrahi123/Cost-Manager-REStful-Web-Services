const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const findUserByEmail = async (email) =>
  await User.findOne({ email }).lean().exec();

const findUserById = async (_id) => await User.findOne({ _id }).lean().exec();

const deleteUser = async (_id) => await User.deleteMany({ _id }).lean().exec();

const getAllUsers = async () => {
  try {
    const users = await User.find({}).lean().exec();
    const filterUsers = users.map((u) => {
        const { password, _id, token, ...user } = u;
        user.id = _id;

        return user;
    });

    return filterUsers;
  } catch (err) {
    throw err;
  }
};

const register = async (userData) => {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const newUser = new User(userData);
    await newUser.save();

    return newUser;
  } catch (err) {
    throw new Error(`User Not created, ${err.message}`);
  }
};

const signin = async (data) => {
  try {
    const { email, password } = data;
    const user = await findUserByEmail(email);

    if (user) {
      const isPasswordSame = await bcrypt.compare(password, user.password);
      if (isPasswordSame) {
        return user;
      } else {
        throw new Error("Password incorrect");
      }
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  register,
  findUserById,
  signin,
  getAllUsers,
  findUserByEmail,
  deleteUser
};
