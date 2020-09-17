import React from 'react';
import './photoContainer.style.css';
import { Link } from 'react-router-dom';
import Photo from './photo';
import Proptypes from 'prop-types';

const PhotoContainer = (props) => {

    return (
        <React.Fragment>
            <header>
                <h1>Photowall</h1>
            </header>
            <Link to="/addPhoto" className="addIcon"></Link>
            <div className="photoGrid">
                {
                    props.posts
                        .sort(function(a, b) {
                            return b.id - a.id;
                        })
                        .map(post => {
                            return (
                                <Photo key={post.id} post={post} onRemovePhoto={props.onRemovePhoto} />
                            )
                        })
                }
            </div>
        </React.Fragment>
    )
}

// make sure to pass the right type 
PhotoContainer.propTypes = {
    posts: Proptypes.array.isRequired,
    onRemovePhoto: Proptypes.func.isRequired
}

export default PhotoContainer;