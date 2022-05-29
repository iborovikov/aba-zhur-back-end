import createError from 'http-errors';

import { Event } from '../../models/index.mjs'

const {NotFound} = createError

const deleteEvent = async (req, res) => {
    const {eventId} = req.params
    
    const event = await Event.findByIdAndDelete(eventId)
    if (!event) {
        throw new NotFound("Event not found")
    }

    res.status(200).json({
        status: 'sucsess',
        code: 200,
        message: "Event was deleted",
    })
}

export default deleteEvent