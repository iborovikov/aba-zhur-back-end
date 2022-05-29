import createError from "http-errors"

import { Event } from "../../models/index.mjs"

const { BadReques, NotFound } = createError

const getAllEvents = async (req, res) => {
    const { producer } = req.body
    
    if (!producer) {
        throw new BadReques("Add producer name")
    }

    const prodEvents = await Event.find({ producer })

    if (!prodEvents) {
        throw new NotFound("Producer dosen't have events")
    }
    
    res.status(200).json({
        status: 'sucsess',
        code: 200,
        data: [...prodEvents]

    })
}

export default getAllEvents