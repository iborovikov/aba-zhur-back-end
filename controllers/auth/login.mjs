import createError  from "http-errors";
import jwt from "jsonwebtoken"

import {User} from "../../models/index.mjs"

const { NotFound } = createError

const login = async (req, res) => {


  const { login, password } = req.body;
  const user = await User.findOne({ login });
  if (!user || !user.comparePassword(password)) {
    throw new NotFound("Wrong login or password");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      token,
      user: {
        login,
        id: user._id,
      },
    },
  });
};

export default login;