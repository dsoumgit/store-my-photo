import { combineReducers } from 'redux';
import postsReducer from './reducers/postsReducer';
//import addPostReducer from './reducers/deleteme_addPostReducer';

const rootReducer = combineReducers({
    posts: postsReducer
  //  post: addPostReducer
});

export default rootReducer;
