import { firestore } from '../../firebase/firebase.util';

// Action creator
export const setPosts = (postsMap) => {
    return {
        type: "SET_POSTS",
        payload: postsMap
    }
}

export const addPost = (post) => {
    
    return {
        type: "ADD_POST",
        payload: post
    }
} 

// export const removePost = (docId) => {
//     // console.log(index);
//      console.log(docId);
//     // // delete a document from firestore
//     // const query = firestore.collection('posts').doc(docId).delete();
//     // query.then(() => {
//     //         console.log("Successfully deleted!");
            
//     //     })
//     //     .catch(error => {
//     //         console.log(error);
//     //     })
    
//     return{
//         type: "REMOVE_POST",
//         payload: docId
//     }
// }

export const removePhotoPost = (postId) => {
    return{
        type: "REMOVE_POST",
        payload: postId
    }
}