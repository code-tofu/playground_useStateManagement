// import { createStore } from 'redux'
import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./rootReducer";
import type { IPost, CommentMap } from "./types";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension'


export type PostsStore = {
    posts: IPost[];
};

export type CommentsStore = {
    comments: CommentMap;
};

const composedEnhancer = composeWithDevTools(
    applyMiddleware(logger)
)

//may not need initial state if initial state is already defined in reducer?
// export const store = legacy_createStore(rootReducer,initialState, applyMiddleware(logger))
export const store = legacy_createStore(
    rootReducer,
    undefined,
    composedEnhancer
);
