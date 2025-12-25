import type { IPost } from "../../types";
import { PostActions } from "./actionTypes";
import axios from "axios";
import type { AppDispatch , AppThunk} from "../../store";

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

export const loadAllPosts = (limit: number = 10): AppThunk  => {
    return function (dispatch:AppDispatch) {
        dispatch(loadPostsRequested());
        axios
            .get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
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
}
