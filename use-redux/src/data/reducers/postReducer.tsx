import { PostActions } from "../actions/postActionTypes";
import type { PostActionsTypes } from "../actions/postActionTypes";
import { initialState } from "@/store";
import savedPosts from "../../../db.json";
import type { Post } from "../../types";
import type { PostStore } from "@/store";

export function postsReducer(state: PostStore = initialState, action: PostActionsTypes): PostStore {
    switch (action.type) {
        case PostActions.ADD_POST:
            console.log("ADD_POST");
            return { ...state, posts: [...state.posts, action.payload] };
        case PostActions.DELETE_POST:
            console.log("DELETE_POST:" + action.payload);
            return { ...state, posts: state.posts.filter((post) => post.id != action.payload) };
        case PostActions.LOAD_ALL:
            console.log("LOAD_ALL");
            return { ...state, posts: getSavedPosts()};
        default:
            return state;
    }
}

function getSavedPosts(): Post[] {
    return savedPosts.posts;
}