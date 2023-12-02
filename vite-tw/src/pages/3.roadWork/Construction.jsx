
import { useEffect, useState } from 'react';
import { getRoadWork } from '../../services/firestoreRoadworkServices';


function renderRoadwork(roadwork) {
    return (
        <div key={roadwork.id}> 
            <div className='title'> {roadwork.where}</div>
            <p> {roadwork.description}</p>
        </div>
    )
}

function Construction() {
    const [roadworks, setRoadwork] = useState(null)
    useEffect(() => {
        async function loadRoadwork() {
            const firestoreRoadwork = await getRoadWork()
            setRoadwork(firestoreRoadwork)
        }
        loadRoadwork()
    }, [])
    
    if (!roadworks) {
        <div>Loading...</div>
    }
    return (
        <div>
            <h2>Construction</h2>
            {roadworks.map(renderRoadwork)}
        </div>
    )

}

export default Construction;

//https://www.here.com/docs/bundle/maps-api-for-javascript-developer-guide/page/topics/traffic.html
// how to get html page in jsx file https://stackoverflow.com/questions/50792942/how-to-import-html-file-into-react-component-and-use-it-as-a-component