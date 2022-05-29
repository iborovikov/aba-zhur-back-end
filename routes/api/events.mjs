import express from 'express';
import {
  validation,
  controllerWrapper,
  authenticate
} from '../../middlewares/index.mjs'
import {addEvent, getEvent, deleteEvent, getAllEvents, patchEvent} from '../../controllers/events/index.mjs';
import { eventJoiSchema, patchEventJoiSchema } from '../../models/index.mjs';

const eventRouter = express.Router();

eventRouter.post("/", validation(eventJoiSchema), authenticate, controllerWrapper(addEvent));
eventRouter.get("/:eventId/getEvent", authenticate, controllerWrapper(getEvent));
eventRouter.get("/getAllEvents", authenticate, controllerWrapper(getAllEvents))
eventRouter.delete("/:eventId", authenticate, controllerWrapper(deleteEvent));
eventRouter.patch("/:eventId", validation(patchEventJoiSchema), authenticate, controllerWrapper(patchEvent))


export default eventRouter