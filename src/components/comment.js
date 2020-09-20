import React, { useState } from 'react';
import './comment.style.css';

const Comment = (props) => {
console.log(props);
    const [ comment, setComment ] = useState("comment...");

    const onSubmit = (evt) => {
        evt.preventDefault();

     //   console.log(comment);
    }

    return(
        <div className="comment">
            <form className="comment-form" onSubmit={onSubmit}>
                {/* <input type="text" placeholder={comment} onChange={evt => setComment(evt.target.value)} className="comment-input" /> */}
                <textarea placeholder={comment} onChange={evt => setComment(evt.target.value)}>
                    
                </textarea>
                <input type="submit" className="submit-btn" value="Submit" />
                <input type="button" value="Cancel" onClick={() => props.history.push("/")} />
            </form>
        </div>
    )   
}

export default Comment;