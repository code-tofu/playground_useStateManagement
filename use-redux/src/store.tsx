// import { createStore } from 'redux'
import { applyMiddleware, legacy_createStore,type Action } from "redux";
import rootReducer from "./rootReducer";
import type { IPost, CommentMap } from "./types";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension'
import type { ThunkDispatch,ThunkAction } from "redux-thunk";
import { thunk } from "redux-thunk";

export type PostsStore = {
    posts: IPost[];
    loading: boolean,
    error: string
};

export type CommentsStore = {
    comments: CommentMap;
    loading: boolean,
    error: string
};

const composedEnhancer = composeWithDevTools(
    applyMiddleware(logger,thunk)
)

//may not need initial state if initial state is already defined in reducer?
// export const store = legacy_createStore(rootReducer,initialState, applyMiddleware(logger))
export const store = legacy_createStore(
    rootReducer,
    undefined,
    composedEnhancer
);

// export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, Action>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
