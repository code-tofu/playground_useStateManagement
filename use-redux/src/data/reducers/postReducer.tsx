import { PostActions } from "../actions/actionTypes";
import type { PostActionsTypes } from "../actions/actionTypes";
import savedPosts from "../../../db.json";
import type { IPost } from "../../types";
import type { PostsStore } from "@/store";

export const initialPostsState = {
    posts: [] as IPost[],
};

export function postsReducer(state: PostsStore = initialPostsState, action: PostActionsTypes): PostsStore {
    switch (action.type) {
        case PostActions.ADD_POST:
            return { ...state, posts: [...state.posts, action.payload] };
        case PostActions.DELETE_POST:
            return { ...state, posts: state.posts.filter((post) => post.id != action.payload) };
        case PostActions.LOAD_ALL:
            return { ...state, posts: getSavedPosts()};
        default:
            return state;
    }
}

function getSavedPosts(): IPost[] {
    return savedPosts.posts;
}