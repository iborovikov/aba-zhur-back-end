import createError  from "http-errors";
import { User } from "../../models/user.mjs";

const { Conflict } = createError

const signup = async (req, res) => {
  const { login, password, admin } = req.body;
  const user = await User.findOne({ login });
  if (user) {
    throw new Conflict(`User with login ${login} already exist`);
    }
    
  const newUser = new User({ login, admin });
  newUser.setPassword(password);
  await newUser.save();


  res.status(201).json({
    status: "success",
    code: 201,
    message: "Register success",
    user: {
        login,
    },
  });
};
export default signup;