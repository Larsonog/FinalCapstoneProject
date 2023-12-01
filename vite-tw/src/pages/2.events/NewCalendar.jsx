import './Calendar.css'
import { useEffect, useState } from 'react'
import { getEvents } from '../../services/firestoreService'


function renderEvent(event) {
    return (
        <div key={event.id} className='event'>
            <h2 className='h2'> {event.title} </h2>
            <p> {event.description}</p>
            {/*<p>{event.startTime.toDateString()}</p>*/}
            <p>{event.duration} </p>
        </div>
    )
}

function NewCalendar() {
    const [events, setEvents] = useState(null)
    useEffect(() => {
        async function loadEvents() {
            const firestoreEvents = await getEvents()
            setEvents(firestoreEvents)
        }
        loadEvents()
    }, [])

    if (!events) {
        return <div>Loading...</div>
    }

    return (
        <div className='calendarContainer'>
            <h1> Upcoming Events! </h1>
            {events.map(renderEvent)}
        </div>
    );
}

export default NewCalendar