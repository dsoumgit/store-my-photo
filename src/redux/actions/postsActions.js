import { firestore } from '../../firebase/firebase.util';

// Action creator
export const loadPosts = (postsMap) => {
    return {
        type: "SET_POSTS",
        payload: postsMap
    }
}

export const addPost = (post) => {

    // destructing 
    const { id, imageLink, description } = post;
    // add to the database 
    const postRef = firestore.collection('posts');
    
    postRef.add({
        id,
        imageLink,
        description
    })
        .then(docRef => {
            console.log(docRef.id);
        })
        .catch(error => {
            console.log(error);
        })

    return {
        type: "ADD_POST",
        payload: post
    }
} 

export const removePost = (docId) => {
    // delete a document from firestore
    const query = firestore.collection('posts').doc(docId).delete();
    query.then(() => {
            console.log("Successfully deleted!");
            
        })
        .catch(error => {
            console.log(error);
        })
    
    return{
        type: "REMOVE_POST",
        payload: docId
    }
}