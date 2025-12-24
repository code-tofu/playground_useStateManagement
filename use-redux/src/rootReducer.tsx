import { postsReducer } from "./data/reducers/postReducer";
// import { combineReducers } from "redux";
// import { combineReducers } from "@reduxjs/toolkit";

/* if only single reducer, cannot use combine reducers - will return postReducer instead of a state
const rootReducer = combineReducers({
    postsReducer,
});
*/
const rootReducer = postsReducer;

// const rootReducer = combineReducers({
//     posts: postsReducer, //maps to the state "slice"
// });


export default rootReducer