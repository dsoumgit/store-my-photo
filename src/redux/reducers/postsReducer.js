
// const INITIAL_STATE = {
//     posts: null
// };

const INITIAL_STATE = [];

// function to return a new state after fetching the data from firestore 
const postsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_POSTS":
            return action.payload
        case "UPDATE_POSTS": 
            return state;
            // return {
            //     ...state,
            //     posts: action.payload
            // }
        case "ADD_POST": 
            return [...state, action.payload];
        case "REMOVE_POST": 
            // const filteredArr = state.filter(item => {
            //     item.id !== action.payload;
            // });
            return [...state.slice(0, action.payload), ...state.slice(action.payload)];
          
        default: 
            return state; 
    }
}

export default postsReducer;