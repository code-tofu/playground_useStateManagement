import type { Post } from "../../types";
import { PostActions } from "./postActionTypes";

export const loadAllPosts = () => {
    console.log("Load All Posts");
    return {
        type: PostActions.LOAD_ALL,
    };
};
export const addPost = (data: Post) => {
    console.log(`Create New Post with id ${data.id}`);
    return {
        type: PostActions.ADD_POST,
        payload: data,
    };
};
export const deletePost = (id: number) => {
    console.log(`Delete Post with id ${id}`);
    return {
        type: PostActions.DELETE_POST,
        payload: id,
    };
};

//object payload name needs to match interface type def
