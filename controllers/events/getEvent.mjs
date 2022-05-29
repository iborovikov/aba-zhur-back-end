import { Event } from '../../models/index.mjs'
import  createError  from 'http-errors'

const {NotFound} = createError

const getEvent = async (req, res) => {
    const { eventId } = req.params

    const event = await Event.findById(eventId)

    if (!event) {
        throw new NotFound("Event ot found")
    }

    res.status(200).json({
        status: 'sucsess',
        code: 200,
        data: event
    })

}

export default getEvent