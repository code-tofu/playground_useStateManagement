import type { IPost } from "../../types";
import { PostActions } from "./actionTypes";
import axios from "axios";
import type { AppDispatch, AppThunk } from "../../store";
import { JSON_SERVER } from "../../constants";

//object payload name needs to match interface type def
// export const loadAllPosts = () => {
//     return {
//         type: PostActions.LOAD_ALL,
//     };
// };

export const loadPostsRequested = () => {
    return {
        type: PostActions.LOAD_POSTS_REQUESTED,
    };
};

export const loadPostsSuccess = (data: IPost[]) => {
    return {
        type: PostActions.LOAD_POSTS_SUCCESS,
        payload: data,
    };
};

export const loadAllPostsError = (error: string) => {
    return {
        type: PostActions.LOAD_POSTS_ERROR,
        payload: error,
    };
};

export const addPostRequested = (data: IPost) => {
    return {
        type: PostActions.ADD_POST_REQUESTED,
        payload: data,
    };
};

export const addPostSuccess = (id: number) => {
    return {
        type: PostActions.ADD_POST_SUCCESS,
        payload: id,
    };
};

export const addPostError = (error: string) => {
    return {
        type: PostActions.ADD_POST_ERROR,
        payload: error,
    };
};
;

// export const addPost = (data: IPost) => {
//     return {
//         type: PostActions.ADD_POST,
//         payload: data,
//     };
// };

export const deletePost = (id: number) => {
    return {
        type: PostActions.DELETE_POST,
        payload: id,
    };
};

export const loadAllPosts = (limit: number = 10): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(loadPostsRequested());
        axios
            .get(`${JSON_SERVER}/posts?_limit=${limit}`)
            .then((response) => {
                // response.data is the users
                const posts: IPost[] = response.data;
                dispatch(loadPostsSuccess(posts));
            })
            .catch((error) => {
                // error.message is the error message
                dispatch(loadAllPostsError(error.message));
            });
    };
};

export const addNewPost = (newPost: IPost): AppThunk => {
    return async function (dispatch: AppDispatch) {
        dispatch(addPostRequested(newPost));
        await axios
            .post(`${JSON_SERVER}/posts`, newPost)
            .then((response) => {
                // response.data is the users
                const res: SuccessResponse = response.data;
                console.log(`Post Created with ID ${res.id}`);
                dispatch(addPostSuccess(res.id));
            })
            .catch((error) => {
                // error.message is the error message
                dispatch(addPostError(error.message));
            });
        dispatch(loadAllPosts());
    };
};

type SuccessResponse = {
    id: number;
    title: string;
    body: string;
    userId: number;
};
