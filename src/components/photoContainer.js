import React from 'react';
import './photoContainer.style.css';
import { Link } from 'react-router-dom';
import Photo from './photo';
import Proptypes from 'prop-types';

// const PhotoContainer = (props) => {
//     console.log(props);
//     return (
//         <React.Fragment>
            
//             <Link to="/addPhoto" className="addIcon"></Link>
//             <div className="photoGrid">
//                 {
//                     props.posts
//                         .sort((a, b) => {
//                             return b.id - a.id;
//                         })
//                         .map((post, index) => {
//                             return (
//                                 <Photo key={post.id} post={post} {...props} index={index} />
//                             )
//                         })
//                 }
//             </div>
//         </React.Fragment>
//     )
// }

const PhotoContainer = (props) => {

    return(
        <React.Fragment>
            <Link to="/addPhoto" className="addIcon"></Link>
            <div className="photoGrid">
                {
                    props.posts.map((post, indx) => {
                        return <Photo key={post.id} post={post} index={indx} />
                    })
                }
            </div>
        </React.Fragment>
    )
}


// make sure to pass the right type 
PhotoContainer.propTypes = {
    posts: Proptypes.array.isRequired
}

export default PhotoContainer;