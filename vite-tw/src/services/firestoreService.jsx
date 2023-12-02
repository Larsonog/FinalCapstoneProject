import { getApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore"
export async function getEvents() {
    const db = getFirestore(getApp())
    const eventsCollection = collection(db, 'events')
    const events = await getDocs(eventsCollection);

    return events.docs.map(doc => ({
        id: doc.id,
        title: doc.data()["title"],
        description: doc.data()["description"],
        duration: doc.data()["duration"],
        startDate: doc.data()["startDate"],
    }));

}

