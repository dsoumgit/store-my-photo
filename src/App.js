import React, { useState, useEffect } from 'react';
//import './App.css';
import { SpinnerStyle } from './App.style';
import { Route, Switch } from 'react-router-dom';

import { firestore, convertPostsToMap } from './firebase/firebase.util';
import PhotoContainer from './components/photoContainer';
import AddPhoto from './components/addPhoto';
import NotFound from './components/notFound';
import { connect } from 'react-redux';
import { setPosts } from './redux/actions/postsActions';

// use useEffect in React hooks to do a server request in ComponentDidMount()
const App = (props) => {

  const [ isLoading, setIsLoading ] = useState(true);

  const { posts } = props; 

  useEffect(() => {

    const { setPosts } = props; 

    const posts = firestore.collection('posts');

        posts.onSnapshot(async snapshot => {
          const postsMap = convertPostsToMap(snapshot);
          setPosts(postsMap);
          // set loading 
          setIsLoading(false);
         });
  }, []);

  return(
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
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
        
      </React.Fragment>
  )
}

const mapStateToProps = state => ({
  posts: state
})

const mapDispatchToProps = dispatch => ({
  setPosts: postsMap => dispatch(setPosts(postsMap))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
