import firebase from 'firebase/app';
import 'firebase/firebase-firestore';   // firestore (database)

const firebaseConfig = {
    apiKey: "AIzaSyAMnhaJbBUEM_gcKcCPNty-BHAImhvt6qY",
    authDomain: "photowall-d720c.firebaseapp.com",
    databaseURL: "https://photowall-d720c.firebaseio.com",
    projectId: "photowall-d720c",
    storageBucket: "photowall-d720c.appspot.com",
    messagingSenderId: "239118506390",
    appId: "1:239118506390:web:53d799bb211486b97925b7",
    measurementId: "G-TS5NTEFD7Y"
};

// create a batched writes to add json objects to the database 
export const addPostsCollection = async (key, objectsToAdd) => {
    // set the collections 
    const postsRef = firestore.collection(key);
    // create a batch 
    const batch = firestore.batch();
    // iterate through 
    objectsToAdd.forEach(obj => {
        const newDocRef = postsRef.doc();
        batch.set(newDocRef, obj);
    });

    // returns a promise 
    return await batch.commit();
}

// map posts 
export const convertPostsToMap = (posts) => {
    
    const transformedPosts = posts.docs.map(doc => {
        const { id, imageLink, description } = doc.data();

        return {
            id: doc.id,
            imageLink,
            description
        }
    });

    return transformedPosts;
    // return transformedPost.reduce((acc, post) => {
    //     return acc;
    // }, {});
}

// Add post function 
export const addPostToDB = (posts, objToAdd) => {
    console.log(posts);
    console.log(objToAdd);
}


// initialize firebase 
firebase.initializeApp(firebaseConfig);
// export firestore 
export const firestore = firebase.firestore();