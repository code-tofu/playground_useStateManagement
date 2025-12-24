import type { Post } from "../../types";
import { PostActions } from "./postActionTypes";

export const loadAllPosts = () => {
    return {
        type: PostActions.LOAD_ALL,
    };
};
export const addPost = (data: Post) => {
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

//object payload name needs to match interface type def
