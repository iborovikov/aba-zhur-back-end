import { Event } from "../../models/index.mjs"
import createError from "http-errors"

const {NotFound} = createError
const patchEvent = async (req, res) => {
    const { eventId } = req.params

    await Event.findByIdAndUpdate(eventId, { ...req.body })
    
    const updatedEvent = await Event.findById(eventId)
    
    if (!updatedEvent) {
        throw new NotFound("Event not found")
    }

    res.status(200).json({
      status: 'sucsess',
      code: 200,
      data: updatedEvent
    })

}

export default patchEvent