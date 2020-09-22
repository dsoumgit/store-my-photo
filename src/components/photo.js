import React, { Component } from 'react';
import './photo.style.css';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removePost, removePhotoPost, loadPosts } from '../redux/actions/postsActions';
import { firestore, convertPostsToMap } from '../firebase/firebase.util';

class Photo extends Component {
    constructor() {
        super();
    }

    onRemovePhoto = (postId) => {
        
        const { removePhotoPost } = this.props; 

        removePhotoPost(postId);

        this.props.history.push("/");
    }

    render() {
      //  console.log(this.props);
        const { post, index, history, removePost } = this.props; 
        
        return (
            <figure>
                <Link to={`/single/${post.id}`}>
                    <img src={post.imageLink} alt={post.description} className="photo" />
                </Link>
                <div className="photo-content">
                    <h2>{post.description}</h2>
                    <div className="photo-buttons">
                        <button type="button" className="remove-btn" onClick={() => this.onRemovePhoto(post.id)} >Remove</button>
                    </div>
                    <p>{`Posted: ${post.postedDate}`}</p>
                </div>
            </figure>
        )
    }
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        posts: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removePhotoPost: postId => dispatch(removePhotoPost(postId))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Photo));