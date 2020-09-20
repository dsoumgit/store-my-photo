import React, { Component } from 'react';
import './photo.style.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removePost } from '../redux/actions/postsActions';

// const Photo = (props) => {

//     const post = props.post;

//     return (
//         <figure>
//             <Link to={`/single/${post.id}`}>
//                 <img src={post.imageLink} alt={post.description} className="photo" />
//             </Link>

//             <div className="photo-content">
//                 <h2>{post.description}</h2>
//                 <div className="photo-buttons">
//                     <button type="button" className="remove-btn" onClick={() => {
//                         props.removeDBPost(props.index, post.id)
//                     }}>Remove</button>
//                 </div>
//                 <p>{`Posted: ${post.postedDate}`}</p>
//             </div>
//         </figure>
//     )
// }


class Photo extends Component {
    constructor() {
        super();
    }

    render() {
        const { post, index, removePost } = this.props; 
        
        return (
            <figure>
                <Link to={`/single/${post.id}`}>
                    <img src={post.imageLink} alt={post.description} className="photo" />
                </Link>

                <div className="photo-content">
                    <h2>{post.description}</h2>
                    <div className="photo-buttons">
                        <button type="button" className="remove-btn" onClick={() => {
                            removePost(post.id)
                        }}>Remove</button>
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

const mapDispatchToProps = dispatch => {
    return {
        removePost: id => dispatch(removePost(id))
    }
}

export default connect(null, mapDispatchToProps)(Photo);