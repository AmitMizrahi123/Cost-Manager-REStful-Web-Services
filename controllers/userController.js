const userService = require("../services/userService");
const validationUserService = require("../services/validationUserService");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const data = req.body;
    const error = validationUserService.isCreateValid(data);

    if (error) {
      throw new Error(error.message);
    }

    const isExists = await userService.findUserByEmail(data.email);
    if (isExists) {
      throw new Error("Email already exists");
    }
    
    const newUser = await userService.register(data);

    const token = jwt.sign(
      {
        data: { _id: newUser._id },
      },
      process.env.SECRET_JWT_KEY,
      { expiresIn: "7d" }
    );

    return res.json({ token, _id: newUser._id });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const signin = async (req, res) => {
  try {
    const data = req.body;
    const user = await userService.signin(data);

    if (!user) {
      throw new Error("User Not Exists");
    } 

    const token = jwt.sign({ data: { _id: user._id } }, 'secret', {expiresIn : '24h'}, process.env.SECRET_JWT_KEY);

    const { password, ...restOfUserData } = user;
    restOfUserData.token = token;
    res.cookie('auth', restOfUserData);

    return res.json(restOfUserData);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
    register,
    signin,
};
