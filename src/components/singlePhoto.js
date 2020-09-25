import React from 'react';
import './singlePhoto.style.css';
import Photo from './photo';
import Comment from './comment';

const SinglePhoto = (props) => {
    console.log(props);
    const photoId = Number(props.match.params.id);
    const { posts } = props.posts;
    const post = posts.find(post => post.id === photoId);   // return an object 

    return (
        <div className="popup-container">
            Single photo
            {/* <Photo post={post} />
            <Comment {...props} /> */}
        </div>
    )
}

export default SinglePhoto;