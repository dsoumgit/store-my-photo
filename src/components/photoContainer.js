import React, { Component } from 'react';
import './photoContainer.style.css';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Photo from './photo';
import Proptypes from 'prop-types';

class PhotoContainer extends Component {
    constructor() {
        super();
        this.state = {
            offset: 0,
            data: [],
            elements: [],
            perPage: 5,
            currentPage: 0
        }
    }

    receivedData() {
        const { posts } = this.props;
        const slice = posts.slice(this.state.offset, this.state.offset + this.state.perPage);

        const postData = slice.map((post, index) => {
            return (<Photo key={index} post={post} index={index} {...this.props} />)
        });

        this.setState({
            pageCount: Math.ceil(posts.length / this.state.perPage),
            postData
        })
    }

    componentDidMount() {
        this.receivedData();
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

        return (
            <React.Fragment>
                <Link to="/addPhoto" className="addIcon"></Link>
                <div className="photoGrid">
                    {this.state.postData}
                </div>
                <div className="pagination-container">
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
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


// make sure to pass the right type 
PhotoContainer.propTypes = {
    posts: Proptypes.array.isRequired
}

export default PhotoContainer;