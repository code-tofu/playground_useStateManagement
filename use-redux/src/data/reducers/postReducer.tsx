import { PostActions } from "../actions/actionTypes";
import type { PostActionsTypes } from "../actions/actionTypes";
// import savedPosts from "../../../db.json";
import type { IPost } from "../../types";
import type { PostsStore } from "@/store";

export const initialPostsState = {
    posts: [] as IPost[],
    loading: false,
    error: ''
};

export function postsReducer(state: PostsStore = initialPostsState, action: PostActionsTypes): PostsStore {
    switch (action.type) {
        case PostActions.ADD_POST_REQUESTED:
            return { ...state, loading: true};
        case PostActions.ADD_POST_SUCCESS:
            return { ...state, loading: false};
        case PostActions.ADD_POST_ERROR:
            return { ...state, loading: false, error: action.payload };
        case PostActions.DELETE_POST:
            return { ...state, posts: state.posts.filter((post) => post.id != action.payload) };
        case PostActions.LOAD_POSTS_REQUESTED:
            return { ...state, loading: true};
        case PostActions.LOAD_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload};
        case PostActions.LOAD_POSTS_ERROR:
            return { ...state, loading: false, error: action.payload};
        default:
            return state;
    }
}

// function getSavedPosts(): IPost[] {
//     return savedPosts.posts;posts: [...state.posts, action.payload] payload
// }actLoadPostsErrorActionType