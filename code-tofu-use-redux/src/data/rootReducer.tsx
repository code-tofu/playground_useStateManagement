// import { combineReducers } from "redux";
import { postsReducer } from "./reducers/postsReducer";
import { combineReducers } from "@reduxjs/toolkit";
// const rootReducer = postsReducer;

/* if only single reducer, cannot use combine reducers - will return postReducer instead of a state
const rootReducer = combineReducers({
    postsReducer,
});
*/
const rootReducer = combineReducers({
    posts: postsReducer, //maps to the state "slice"
});

export default rootReducer;