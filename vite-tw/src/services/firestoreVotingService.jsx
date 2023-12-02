import { getApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore"
export async function getVotingDoc() {
    const db = getFirestore(getApp())
    const votingCollection = collection(db, 'voting')
    const voting = await getDocs(votingCollection);

    return voting.docs.map(doc => ({
        id: doc.id,
        title: doc.data()["title"],
        description: doc.data()["description"],
        date: doc.data()["date"],
        addInfo: doc.data()["addInfo"]
    }));

}

