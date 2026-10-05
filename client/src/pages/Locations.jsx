import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import unitygrid from '../assets/chicagoMap.jpg'
import '../css/Locations.css'

const Locations = () => {

    const [locations, setLocations] = useState([])
    const [venueNames, setVenueNames] = useState({venue1: '', venue2: '', venue3: '', venue4: ''})

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await LocationsAPI.getAllLocations()
                setLocations(locationsData)
                setVenueNames({venue1: locationsData[0].location_name, venue2: locationsData[1].location_name, venue3: locationsData[2].location_name, venue4: locationsData[3].location_name})
                setListeners()
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    const setListeners = () => {
        const polygons = document.querySelectorAll('polygon')

        polygons.forEach(element => {
            element.addEventListener('mouseover', (event) => {
                const buttonElement = document.getElementById(`${event.target.id}button`)
                buttonElement.style.opacity = 1;
            })

            element.addEventListener('mouseleave', (event) => {
                const buttonElement = document.getElementById(`${event.target.id}button`)
                buttonElement.style.opacity = 0;
            })
        })
    }

    return (
        <div className='available-locations'>
            <div id='venue1button' className='venue1-button-overlay'>
                <button>{venueNames.venue1}</button>
            </div>

            <div id='venue2button' className='venue2-button-overlay'>
                <button>{venueNames.venue2}</button>
            </div>

            <div id='venue3button' className='venue3-button-overlay'>
                <button>{venueNames.venue3}</button>
            </div>

            <div id='venue4button' className='venue4-button-overlay'>
                <button>{venueNames.venue4}</button>
            </div>

            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000.32 500" xmlSpace="preserve">
                {/* <image id="background" xlinkHref={unitygrid} transform="matrix(0.48 0 0 0.48 0 0)"></image> */}
                
                <a href='/navy-pier'><polygon id="venue1"   points="750,160 600,160 600,260 750,260"/></a>
                
                <a href='/field-museum'><polygon id="venue2" name='venue2' value={2} points="450,360 550,360 550,460 450,460" /></a>
                
                <a href='/shedd-aquarium'><polygon id="venue3" name='venue3' value={3} points="550,360 650,360 650,460 550,460" /></a>

                <a href='/chicago-theatre'><polygon id="venue4" name='venue4' value={4} points="450,200 550,200 550,300 450,300"/></a>
            </svg>
        </div>
    )
}

export default Locations