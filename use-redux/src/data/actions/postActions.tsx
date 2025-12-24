import type { IPost } from "../../types";
import { CommentActions, PostActions } from "./actionTypes";

export const loadAllPosts = () => {
    return {
        type: PostActions.LOAD_ALL,
    };
};
export const addPost = (data: IPost) => {
    return {
        type: PostActions.ADD_POST,
        payload: data,
    };
};
export const deletePost = (id: number) => {
    return {
        type: PostActions.DELETE_POST,
        payload: id,
    };
};

export const loadCommentsByPost = (id: number) => {
    return {
        type: CommentActions.LOAD_COMMENTS,
        payload: id,
    };
};



//object payload name needs to match interface type def
