import './VotingPage.css'
import { useEffect, useState } from 'react'
import { getVotingDoc } from '../../services/firestoreVotingService'


function renderDoc(voting) {
    return (
        <div key={voting.id} >
            <div className='title'> {voting.title} </div>
            <p> {voting.description}</p>
            {/*<p>{event.startTime.toDateString()}</p>*/}
            <p>{voting.date.toString()} </p>
        </div>
    )
}

function VotingDocs() {
    const [voting, setVotingDoc] = useState(null)
    useEffect(() => {
        async function loadVotingDoc() {
            const firestoreEvents = await getVotingDoc()
            setVotingDoc(firestoreEvents)
        }
        loadVotingDoc()
    }, [])

    if (!voting) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1> Upcoming Voting Events! </h1>
            {voting.map(renderDoc)}
        </div>
    );
}

export default VotingDocs