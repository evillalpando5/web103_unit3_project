import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState({})
    const [events, setEvents] = useState([])
    useEffect(()=>{
       const getLocation = async()=>{
        try{
            const locations = await fetch(`/api/locations/${index}`)
            const locationInfo = await locations.json()

            const events = await fetch(`/api/locations/${index}/events`)
            const eventsInfo = await events.json()

            setLocation(locationInfo)
            setEvents(eventsInfo)
        }
        catch(error){
            console.error(error)
        }
       } 
       getLocation()
    }, [index])
    return (
        <div className='location-events'>
            <header>
                {/* <div className='location-image'>
                    <img src={location.image} />
                </div> */}

                <div className='location-info'>
                    <h2>{location.location_name}</h2>
                    {/* <p>{location.address}, {location.city}, {location.state} {location.zip}</p> */}
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.event_id}
                            id={event.event_id}
                            title={event.event_name}
                            date={event.event_date}
                            desc={event.event_description}
                            cost={event.event_cost}
                            image={event.event_image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents