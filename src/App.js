import React, { Component, useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import { firestore, convertPostsToMap } from './firebase/firebase.util';
import PhotoContainer from './components/photoContainer';
import AddPhoto from './components/addPhoto';
import SinglePhoto from './components/singlePhoto';
import NotFound from './components/notFound';
import { connect } from 'react-redux';
//import { loadPosts } from './redux/actions/actions';
import { loadPosts } from './redux/actions/postsActions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    const { loadPosts } = this.props;

    const posts = firestore.collection('posts');

    posts.onSnapshot(async snapshot => {
      const postsMap = convertPostsToMap(snapshot);
      
      loadPosts(postsMap);

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
        <header>
          <h1>Photowall</h1>
        </header>
        <Switch>
          <Route exact path="/" render={() =>
            isLoading ? <div className="loading">Loading<span>...</span></div>
              : (
                <PhotoContainer {...posts } />
              )} />
          <Route path="/addPhoto" render={() => (
            <AddPhoto {...posts} />
          )} />
          <Route path="/single/:id" render={(params) => (
            <SinglePhoto {...params} />
          )} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
        <footer>
          <div className="footer">
            Copyright &#169; {new Date().getFullYear()} by Dara Soumgit. All rights reserved.
                </div>
        </footer>
      </React.Fragment>
    )
  }
}

// const App = (props) => {

//   const [loading, setLoading] = useState(true);

//   const { loadPosts, posts } = props;

//   useEffect(() => {
//     const posts = firestore.collection('posts');

//     posts.onSnapshot(async snapshot => {
//       const postsMap = convertPostsToMap(snapshot);
//       // call dispatch event 
//       loadPosts(postsMap);   
//       // set state 
//       setLoading(false);
//     });

//   });

//   return (
//     <div className="App">
//       <header>
//         <h1>Photowall</h1>
//       </header>
//       <Switch>
//         <Route exact path="/" render={() =>
//           loading ? <div className="loading">Loading<span>...</span></div>
//             : (
//               <PhotoContainer {...posts} />
//             )} />
//         <Route path="/addPhoto" render={() => (
//           <AddPhoto {...posts} />
//         )} />
//         <Route path="/single/:id" render={(params) => (
//           <SinglePhoto {...params} />
//         )} />
//         <Route path="*" exact={true} component={NotFound} />
//       </Switch>
//     </div>
//   )
// }

const mapStateToProps = state => ({
  posts: state
})

const mapDispatchToProps = dispatch => ({
  loadPosts: postsMap => dispatch(loadPosts(postsMap))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


// const App = (props) => {

//   // firestore.collection("cities").doc("LA").set({
//   //   name: "Los Angeles",
//   //   state: "CA",
//   //   country: "USA"
//   // })
//   //   .then(() => {
//   //     console.log("Document successfully written...!");
//   //   })
//   //   .catch(error => {
//   //     console.error("Error writing document: ", error);
//   //   });


//   const posts = firestore.collection('posts');
//   //console.log(posts);
//   //console.log(props);

//    posts.onSnapshot(async snapshot => {
//     const postsMap =  convertPostsToMap(snapshot);
//     props.loadPosts(postsMap);

//   //  console.log(postsMap);  
//   //   snapshot.docs.map(doc => {
//   //     console.log(doc.data());
//   //   })
//    });

//    console.log(props);

//   return (
//     <div className="App">
//       <header>
//         <h1>Photowall</h1>
//       </header>
//       <Switch>
//         <Route exact path="/" render={() => (
//           <PhotoContainer {...props} />
//         )} />
//         <Route path="/addPhoto" component={AddPhoto} />
//         <Route path="/single/:id" render={(params) => (
//           <SinglePhoto {...props} {...params} />
//         )} />
//         <Route path="*" exact={true} component={NotFound} />
//       </Switch>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   posts: state
// })

// const mapDispatchToProps = dispatch => ({
//   loadPosts: postsMap => dispatch(loadPosts(postsMap))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);
