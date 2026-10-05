import {pool} from "../config/database.js"

const getAllLocations = async(req, res) =>{
    try{
        const result = await pool.query(`SELECT * FROM locations`)
        res.json(result.rows)
    }
    catch(error) {
        console.log(error)
        res.status(500).json({error: "unable to get all locations"})
    }

}

const getLocation = async (req, res) =>{
    try{
        const id = req.params.id
        const result = await pool.query(
            'SELECT * FROM locations WHERE location_id = $1',
            [id]
        )
        res.json(result.rows[0])

    }
     catch(error) {
        console.log(error)
        res.status(500).json({error: "unable to get location"})
    }
}
export {getAllLocations, getLocation}