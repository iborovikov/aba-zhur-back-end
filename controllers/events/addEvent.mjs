import createError from 'http-errors';
import correctDateFormat from './dateFormat.mjs';

import { Event } from '../../models/index.mjs';

const { BadRequest } = createError

const addEvent = async (req, res) => {
    const { date } = req.body
    
    if (!correctDateFormat(date)) {
        throw new BadRequest("Wrong date format. Correct is DD-MM-YYYY")
    }
    
    const newEvent = await Event.create({...req.body})

    res.status(201).json({
        status: 'sucsess',
        code: 201,
        data: newEvent
    })
}

export default addEvent