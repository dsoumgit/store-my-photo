import React, { Component } from 'react';
import './photoContainer.style.css';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Photo from './photo';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { setPosts } from '../redux/actions/postsActions';

class PhotoContainer extends Component {
    constructor() {
        super();
        this.state = {
            offset: 0,
            elements: [],
            perPage: 5,
            pageCount: 0,
            currentPage: 0
        }
    }

    receivedData = () => {
        const { posts } = this.props.posts;
        const slice = posts.slice(this.state.offset, this.state.offset + this.state.perPage);
        
        // sort by date 
        const sortDate = slice.sort((a, b) => {
            return b.id - a.id;
        });
    //    console.log(sortDate);
        sortDate.map((post, index) => {
            return (<Photo key={index} post={post} index={index} {...this.props} />)
        });
        
        const pageCount =  Math.ceil(posts.length / this.state.perPage);
        this.setState({
            pageCount
        })
    }

    handlePageClick = (evt) => {
        const selectedPage = evt.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData();
        });
    }

    
    render() {
        
        const { posts } = this.props.posts;
        const slice = posts.slice(this.state.offset, this.state.offset + this.state.perPage);
        
        // sort by date 
        const sortDate = slice.sort((a, b) => {
            return b.id - a.id;
        });
        
        const postData = sortDate.map((post, index) => {
            return (<Photo key={index} post={post} index={index} {...this.props} />)
        });
        
        const pageCount =  Math.ceil(posts.length / this.state.perPage);
        
        return (
            <React.Fragment>
                <header>
                    <h1>Our Photowall</h1>
                </header>
                <Link to="/addPhoto" className="addIcon"></Link>
                <div className="photoGrid">
                    {postData}
                </div>
                <div className="pagination-container">
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pageCount}
                        onPageChange={this.handlePageClick}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"} />
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = state => {
    return{
        posts: state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setPosts: posts => dispatch(setPosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoContainer);