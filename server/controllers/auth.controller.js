const { generateToken } = require("../middlewares/jwtauth.middleware");
const user = require("../models/user.model");

const signUp = async (req, res) => {
  try {
    const { username, password, role, email } = req.body;
    const response = await user.create({
      username,
      password,
      role,
      email,
    });
    if (!response) {
      return res.status(500).json({ error });
    }
    res.status(200).json({ user: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const User = await user.findOne({ username: username });
    if (!User) {
      return res.status(401).json({ error: "user not found" });
    } else {
      if (User.password !== password) {
        return res.status(401).json({ error: "Invalid Credentials" });
      } else {
        const payload = {
          id: User._id,
          username: User.username,
          role: User.role,
        };
        const token = generateToken(payload);
        res
          .status(200)
          .json({ message: "Logged In", User: User, token: token });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const Person = async (req, res) => {
  const persons = await user.find();
  if (!persons) {
    return res.status(500).json({ message: "No users found" });
  }
  res.status(200).json({ persons });
};

module.exports = {
  signUp,
  login,
  Person,
};
