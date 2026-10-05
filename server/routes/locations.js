import express from 'express'
// import controllers for events and locations
import { getAllLocations, getLocation } from '../controllers/locations.js'
import { getEventsByLocation } from '../controllers/events.js'
const router = express.Router()

// define routes to get events and locations
router.get('/', getAllLocations)
router.get('/:id/events', getEventsByLocation)
router.get('/:id/', getLocation)

export default router