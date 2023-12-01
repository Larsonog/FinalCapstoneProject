import React from 'react'
import './Calendar.css'


function renderEvent(event) {
    return (
        <div className='event'>
            <h2 className='h2'> {event.title} </h2>
            <p> {event.description}</p>
            <p>{event.startTime.toDateString()}</p>
            <p>{event.duration} </p>
        </div>
    )
}

function NewCalendar() {
    const events = [{
        id: "1",
        title: "Test",
        description: "Trying a new tutorial",
        startTime: new Date(),
        duration: 1.0
    },
    {
        id: "2",
        title: "Test Test",
        description: "Trying a new tutorial",
        startTime: new Date(),
        duration: 2.0
    },
    ]
    return (
        <div className='calendarContainer'>
            <h1> Upcoming Events! </h1>
            {events.map(renderEvent)}
        </div>
    );
}

export default NewCalendar