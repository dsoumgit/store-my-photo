import React, { useState } from 'react';
import './addPhoto.style.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
//import { addPost } from '../redux/actions/actions';
import { firestore } from '../firebase/firebase.util';
import { addPost } from '../redux/actions/postsActions';

const AddPhoto = (props) => {

    const [link, setLink] = useState('url goes here...');
    const [description, setDescription] = useState('description...');

    const { posts, addPost } = props;

    const onPostSubmit = (evt) => {
        evt.preventDefault();

        const link = evt.target.elements.link.value;
        const description = evt.target.elements.description.value;
        // check 
        if (link && description) {
            const post = {
                id: Number(new Date),   // store as numeric 
                imageLink: link,
                description: description
                //  postedDate: new Date().toLocaleString()
            }

            // add to the database 
            const postRef = firestore.collection('posts');
            postRef.add({
                id: Number(new Date),   // store as numeric 
                imageLink: link,
                description: description,
                postedDate: new Date().toLocaleString(),
                test: "01/01/2020"
            })
                .then(docRef => {
                    console.log(docRef.id);
                })
                .catch(error => {
                    console.log(error);
                })

            // dispatch 
            addPost(post);
            // route to home page
            props.history.push("/");
        } else {
            alert("Input is required.");
        }
    }

    return (
        <div className="add-photo">
            {/* <h1>Add Photo</h1> */}
            <div className="addPhoto-form">
                <form onSubmit={onPostSubmit}>
                    <label htmlFor="link" className="label">Link:</label>
                    <input
                        type="text"
                        name="link"
                        placeholder={link}
                        onChange={evt => setLink(evt.target.value)}
                        className="textInput"></input>
                    <label htmlFor="description" className="label">Description:</label>
                    <input
                        type="text"
                        name="description"
                        placeholder={description}
                        onChange={evt => setDescription(evt.target.value)}
                        className="textInput"></input>
                    <div className="addPhoto-buttons">
                        <button className="upload-btn">Browse</button>
                    </div>

                    <input type="submit" value="Submit" />
                    <input type="button" value="Cancel" onClick={() => props.history.push("/")} />
                </form>
            </div>
        </div>
    )
}

const mapToStateProps = state => {
    return {
        posts: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPost: (post) => dispatch(addPost(post))
    }
}

export default withRouter(connect(mapToStateProps, mapDispatchToProps)(AddPhoto));

