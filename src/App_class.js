import React, { Component } from 'react';
//import './App.css';
import { H1Style, SpinnerStyle, SpinnerSpan, FooterContainer, FooterStyle } from './App.style';
import { Route, Switch } from 'react-router-dom';

import { firestore, convertPostsToMap } from './firebase/firebase.util';
import PhotoContainer from './components/photoContainer';
import AddPhoto from './components/addPhoto';
import SinglePhoto from './components/singlePhoto';
import NotFound from './components/notFound';
import { connect } from 'react-redux';
import { setPosts } from './redux/actions/postsActions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    const { setPosts } = this.props;

    const posts = firestore.collection('posts');

    posts.onSnapshot(async snapshot => {
      const postsMap = convertPostsToMap(snapshot);
      
      setPosts(postsMap);

      this.setState({
        isLoading: false
      })
    });
  }

  render() {
    const { posts } = this.props;
    const { isLoading } = this.state;

    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() =>
            isLoading ? <SpinnerStyle></SpinnerStyle>
              : (
                <PhotoContainer {...posts } />
              )} />
          <Route path="/addPhoto" render={() => (
            <AddPhoto {...posts} />
          )} />
          {/* <Route path="/single/:id" render={(params) => (
            <SinglePhoto {...this.props} {...params} />
          )} /> */}
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
        
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  posts: state
})

const mapDispatchToProps = dispatch => ({
  setPosts: postsMap => dispatch(setPosts(postsMap))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
