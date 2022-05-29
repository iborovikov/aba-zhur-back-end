import createError  from "http-errors";
import jwt from 'jsonwebtoken'
import {User} from '../models/index.mjs'


const { Unauthorized } = createError

const authenticate = async (req, _, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Unauthorized();
    }

    const [bearer, token] = req.headers.authorization.split(" ");
    if (bearer !== "Bearer") {
      throw new Unauthorized();
    }
    try {
      const { id } = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findById(id);
      if (!user || !user.token) {
        throw new Unauthorized("User not found");
      }
      req.user = user;
      next();
    } catch (err) {
      throw new Unauthorized(err.message);
    }
  } catch (err) {
    next(err);
  }
};

export default authenticate;