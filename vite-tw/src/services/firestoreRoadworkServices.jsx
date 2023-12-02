import { getApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore"
export async function getRoadWork() {
    const db = getFirestore(getApp())
    const roadworkCollection = collection(db, 'roadwork')
    const roadwork = await getDocs(roadworkCollection);

    return roadwork.docs.map(doc => ({
        id: doc.id,
        where: doc.data()["where"], 
        description: doc.data()["description"],
    }));

}

