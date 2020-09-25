import React, { Component, useState } from 'react';
import './addPhoto.style.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { firestore } from '../firebase/firebase.util';
import { addPost } from '../redux/actions/postsActions';

const AddPhoto = (props) => {

    const [link, setLink] = useState('url goes here...');
    const [isRequired, setIsRequired] = useState(false);
    const [description, setDescription] = useState('description...');

    const { posts, addPost } = props;

    function onLinkChange(evt) {
        const linkInput = evt.target.value;
        if (!linkInput) {
            setIsRequired(true);
        } else {
            setIsRequired(false);
            setLink(evt.target.value);
        }
    }


    const onPostSubmit = (evt) => {
        evt.preventDefault();

        const link = evt.target.elements.link.value;
        const description = evt.target.elements.description.value;
        // check 
        if (link && description) {
            const post = {
                id: Number(new Date()),   // store as numeric 
                imageLink: link,
                description: description
                //  postedDate: new Date().toLocaleString()
            }

            // add to the database 
            const postRef = firestore.collection('posts');
            postRef.add({
                id: Number(new Date()),   // store as numeric 
                imageLink: link,
                description: description,
                postedDate: new Date().toLocaleString()
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
        } 

        return setIsRequired(true);
    }

    return (
        <div className="add-photo">
            <header>
                <h1>New Photo</h1>
            </header>
            <div className="addPhoto-form">
                <form onSubmit={onPostSubmit}>
                    <label htmlFor="link" className="label">Link:</label>
                    <input
                        type="text"
                        name="link"
                        placeholder={link}
                        onChange={onLinkChange}
                        className="textInput"></input>
                    {isRequired ? <p style={{color: 'red'}}>Required</p> : ''}
                    <label htmlFor="description" className="label">Description:</label>
                    <input
                        type="text"
                        name="description"
                        placeholder={description}
                        onChange={evt => setDescription(evt.target.value)}
                        className="textInput"></input>

                    {/* <input type="file" id="file" /> */}
                    <div className="">
                        <input type="submit" value="Add" />
                        <input type="button" value="Cancel" onClick={() => props.history.push("/")} />
                    </div>
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

