import './VotingPage.css'
import { useEffect, useState } from 'react'
import { getVotingDoc } from '../../services/firestoreVotingService'

function renderDoc(voting) {
    return (
		
        <div key={voting.id} className='votingPadding' >
            <div className='title'> {voting.title} </div>
            <p> {voting.description}</p>
            {/*<p>{event.startTime.toDateString()}</p>*/}
            <p>{voting.date} </p>
            
			<p>{voting.addInfo}</p>
            <div className='underline'/>
            
        </div>
	
    )
}

function VotingDocs() {
    const [voting, setVotingDoc] = useState(null)
    useEffect(() => {
        async function loadVotingDoc() {
            const firestoreVoting = await getVotingDoc()
            setVotingDoc(firestoreVoting)
        }
        loadVotingDoc()
    }, [])

    if (!voting) {
        return <div>Loading...</div>
    }

    return (
        <div>
            
            <div className='voting-container'>
            <div className='border'>

            {voting.map(renderDoc)}
            </div>
            </div>
        </div>
    );
}

export default VotingDocs