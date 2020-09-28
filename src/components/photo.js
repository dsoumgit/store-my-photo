import React, { Component } from 'react';
import './photo.style.css';
import Slide from 'react-reveal/Slide';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removePhotoPost } from '../redux/actions/postsActions';
import { firestore } from '../firebase/firebase.util';

class Photo extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: true
        }
    }

    onRemovePhoto = (docId) => {
        const { removePhotoPost, history } = this.props;

        firestore.collection('posts').doc(docId).delete()
            .then((response) => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })


        removePhotoPost(docId);

        history.push("/");
    }

    onPhotoView = () => {
        const { post } = this.props;
        this.setState({
            isOpen: false
        })
    }

    render() {
        //  console.log(this.props);
        const { post, index, history, removePost } = this.props;

        return (
            <React.Fragment>
                {
                    this.state.isOpen ? (
                        <Slide left>
                            <figure>
                                <a href={this.state.isOpen ? `#${post.id}` : ''}>
                                    <img src={post.imageLink} alt={post.description} className="photo"
                                        onClick={() => this.onPhotoView()} />
                                </a>
                                <div className="photo-content">
                                    <h2>{post.description}</h2>
                                    <div className="photo-buttons">
                                        <button type="button" className="remove-btn" onClick={() => this.onRemovePhoto(post.id)} >Remove</button>
                                    </div>
                                    <p>{post.postedDate}</p>
                                </div>
                            </figure>
                        </Slide>
                    ) : <div className="overlay">
                            <a href={this.state.isOpen ? `#${post.id}` : ''} className="closeBtn" onClick={() => this.setState({ isOpen: true })}>&times;</a>
                            <div className="overlay-content">
                                <img src={post.imageLink} alt={post.description} className="overlay-img" />
                            </div>
                        </div>
                }
            </React.Fragment>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Photo));