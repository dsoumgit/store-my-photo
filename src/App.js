import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PhotoContainer from './components/photoContainer';
import AddPhoto from './components/addPhoto';
import NotFound from './components/notFound';

function fetchDatabase() {
  return [
    {
      id: 1,
      description: "Beautiful landscape",
      imageLink: "https://cdn.pixabay.com/photo/2019/12/20/23/07/landscape-4709500_960_720.jpg",
      postedDate: "02/09/2019"
    },
    {
      id: 2,
      description: "Incredible galaxy",
      imageLink: "https://cdn.pixabay.com/photo/2012/08/25/22/22/space-54999_960_720.jpg",
      postedDate: "10/20/2019"
    },
    {
      id: 3,
      description: "Romantic couple",
      imageLink: "https://cdn.pixabay.com/photo/2014/12/08/11/49/love-560783_960_720.jpg",
      postedDate: "01/19/2020"
    }
  ]
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const data = fetchDatabase();

    this.setState({
      posts: data
    })
  }

  // create on remove photo function and pass it as a prop
  onRemovePhoto = (postRemoved) => {
    // filter the state and update it 
    this.setState((state) => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }))
  }

  onAddPhoto = (postSubmitted) => {
    console.log(postSubmitted);
    this.setState(state => ({
      posts: state.posts.concat([postSubmitted])
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.posts);
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path="/" render={() => (
            <PhotoContainer posts={this.state.posts} onRemovePhoto={this.onRemovePhoto} />
          )} />

          <Route path="/addPhoto" render={({ history }) => (
            <AddPhoto onAddPhoto={(addedPost) => {
                this.onAddPhoto(addedPost)
                history.push("/")
            }} />
          )} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
