import React from 'react';
import './photo.style.css';
import PropTypes from 'prop-types';

const Photo = (props) => {

    const post = props.post;

    return (
        <figure>
            <img src={post.imageLink} alt={post.description} className="photo" />
            <div className="photo-content">
                <h2>{post.description}</h2>
                <div className="photo-buttons">
                    <button type="button" className="remove-btn" onClick={() => {
                        props.onRemovePhoto(post)
                    }}>Remove</button>
                </div>
                <p>{`Posted: ${post.postedDate}`}</p>
            </div>
        </figure>
    )
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
}

export default Photo;