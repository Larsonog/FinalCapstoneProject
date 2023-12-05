import './Calendar.css'
import { useEffect, useState } from 'react'
import { getEvents } from '../../services/firestoreService'


function renderEvent(event) {
    return (
        <div key={event.id} className='event'>
            <h2 className='title'> {event.title} </h2>
            <p> {event.description}</p>
            {/*<p>{event.startTime.toDateString()}</p>*/}
            <p>when: {event.duration} </p>
            <p>where: {event.where}</p>
            <div className='underline' />
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
        <div className='page-background'>
            <div className='calendarContainer'>

                <h1> Upcoming Events! </h1>
                <div className='events-container'>
                    <div className='border'>
                        {events.map(renderEvent)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewCalendar