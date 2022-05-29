import mongoose from 'mongoose';
import Joi from 'joi';
import bcrypt from 'bcrypt';

const { Schema, model } = mongoose

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Paseord is required"],
      minlength: 6,
    },
    login: {
      type: String,
      required: [true, "Login is required"],
      unique: true
    },
    admin: {
      type: Boolean,
      default: false
    },
    token: {
      type: String,
      default: null,
    }
  },
  { versionKey: false, timestamps: true }
);

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};


const joiUserSchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().min(6).required(),
  admin: Joi.boolean(),
});
  
const User = model("user", userSchema);

export {
  User,
  joiUserSchema,
  userSchema
};