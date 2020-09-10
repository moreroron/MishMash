import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const unsubscribe = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot(snapshot => {
                let docs = [];
                snapshot.forEach(doc => {
                    docs.push({ ...doc.data(), id: doc.id });
                });
                setDocuments(docs);
            });

        return unsubscribe();

    }, [collection]);

    return { documents }
}