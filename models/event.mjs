import mongoose from 'mongoose'
import Joi from 'joi';

const { Schema, model } = mongoose
const eventSchema = Schema(
  {
    header: {
      type: String,
      require: true
    },
    img: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      require: true
    },
    time: {
      type: String,

      require: true
    },
    description: {
      type: String,
      default: "",
    },
    producer: {
      type: String,
      require: true
    }
  },
  { versionKey: false, timestamps: true }
);

const eventJoiSchema = Joi.object({
  header: Joi.string().required(),
  date: Joi.string().required(),
  time: Joi.string().required(),
  description: Joi.string(),
  producer: Joi.string().required()
});

const patchEventJoiSchema = Joi.object({
  header: Joi.string(),
  date: Joi.string(),
  time: Joi.string(),
  description: Joi.string(),
  producer: Joi.string()
});


const Event = model("event", eventSchema);

export {
    eventJoiSchema,
    Event,
    patchEventJoiSchema
};