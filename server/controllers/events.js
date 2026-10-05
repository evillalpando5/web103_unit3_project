import {pool} from "../config/database.js"

const getAllEvents = async(req, res) => {
try {
    const result = await pool.query(`SELECT * FROM events`)
    res.json(result.rows)
}
catch(error) {
    console.log(error)
    res.status(500).json({error: "unable to get all events"})

}
}

const getEvent = async (req, res) =>{
    try{
        const id = req.params.id
        const result = await pool.query(
            'SELECT * FROM events WHERE event_id = $1',
            [id]
        )
        res.json(result.rows[0])

    }
     catch(error) {
        console.log(error)
        res.status(500).json({error: "unable to get event"})
    }
}

const getEventsByLocation = async (req, res) =>{
    try{
        const id = req.params.id
        const result = await pool.query(
            'SELECT * FROM events WHERE location_id = $1',
            [id]
        )
        res.json(result.rows)

    }
     catch(error) {
        console.log(error)
        res.status(500).json({error: "unable to get events by location"})
    }
}

export {getAllEvents, getEvent, getEventsByLocation}