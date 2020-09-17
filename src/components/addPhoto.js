import React, { Component, useState } from 'react';
import './addPhoto.style.css';

// class AddPhoto extends Component {
//     constructor() {
//         super();
//     }

//     onSubmit = (evt) => {

//     }

//     render() {
//         return(
//             <div className="add-photo">
//             <h1>Add Photo</h1>
//             <div className="addPhoto-form">
//                 <form onSubmit={this.onSubmit}>
//                     <label htmlFor="Link" className="label">Link</label>
//                     <input type="text" placeholder="eg. https://cdn.pixabay.com/photo/2012/08/25/22/22/space-54999_960_720.jpg"></input>
//                     <label htmlFor="Description" className="label">Description</label>
//                     <input type="text" placeholder="description..."></input>
//                     <div className="addPhoto-buttons">
//                         <input type="submit" value="Submit" />
//                         <input type="button" value="Cancel" />
//                     </div>
//                 </form>
//             </div>
//         </div>
//         )
//     }
// }

const AddPhoto = (props) => {

    const [ link, setLink ] = useState('url goes here...');
    const [ description, setDescription ] = useState('description...');

    function onLinkChange(evt) {
        setLink(evt.target.value);
    }

    function onDescriptionChange(evt) {
        setDescription(evt.target.value);
    }

    function onPostSubmit(evt) {
        evt.preventDefault();

        const link = evt.target.elements.link.value;
        const description = evt.target.elements.description.value;
        // check 
        if (link && description) {
            const post = {
                id: Number(new Date),   // store as numeric 
                imageLink: link,
                description: description,
                postedDate: new Date().toLocaleString()
            }
    
            props.onAddPhoto(post);
        } else {
            alert("Input is required.");
        }
    }

    return (
        <div className="add-photo">
            <h1>Add Photo</h1>
            <div className="addPhoto-form">
                <form onSubmit={onPostSubmit}>
                    <label htmlFor="Link" className="label">Link</label>
                    <input 
                        type="text" 
                        name="link"
                        placeholder={link}
                        onChange={onLinkChange}
                        className="textInput"></input>
                    <label htmlFor="Description" className="label">Description</label>
                    <input 
                        type="text" 
                        name="description"
                        placeholder={description}
                        onChange={onDescriptionChange}
                        className="textInput"></input>
                    <div className="addPhoto-buttons">
                        <input type="submit" value="Submit" />
                        <input type="button" value="Cancel" />
                    </div>
                </form>
            </div>
        </div>
    )
}

// const AddPhoto = () => {

//     const onSubmit = (evt) => {
//         console.log(evt);
//     }

//     return (
//         <div className="add-photo">
//             <h1>Add Photo</h1>
//             <div className="addPhoto-form">
//                 <form onSubmit={onSubmit}>
//                     <label htmlFor="Link" className="label">Link</label>
//                     <input type="text" placeholder="eg. https://cdn.pixabay.com/photo/2012/08/25/22/22/space-54999_960_720.jpg"></input>
//                     <label htmlFor="Description" className="label">Description</label>
//                     <input type="text" placeholder="description..."></input>
//                     <div className="addPhoto-buttons">
//                         <input type="button" value="Submit" />
//                         <input type="button" value="Cancel" />
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

export default AddPhoto;