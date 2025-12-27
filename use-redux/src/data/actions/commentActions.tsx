import type { IComment } from "@/types";
import { CommentActions, type CommentPayload} from "./actionTypes";
import type { AppDispatch , AppThunk} from "../../store";
import axios from "axios";
import { JSON_SERVER } from "@/constants";

// export const loadCommentsByPost = (id: number) => {
//     return {
//         type: CommentActions.LOAD_COMMENTS,
//         payload: id,
//     };
// };

export const loadCommentsByPostRequested = (id: number) => {
    return {
        type: CommentActions.LOAD_COMMENTS_REQUESTED,
        payload: id,
    };
};

export const loadCommentsByPostSuccess = (id: number, data: IComment[]) => {
    return {
        type: CommentActions.LOAD_COMMENTS_SUCCESS,
        payload: {
            id: id,
            comments: data
        } as CommentPayload
    };
};

export const loadCommentsByPostError = (error: string) => {
    return {
        type: CommentActions.LOAD_COMMENTS_ERROR,
        payload: error,
    };
};

export const loadCommmentsByPostId = (id: number): AppThunk  => {
    return function (dispatch:AppDispatch) {
        dispatch(loadCommentsByPostRequested(id));
        axios
            .get(`${JSON_SERVER}/comments?postId=${id}`)
            .then((response) => {
                // response.data is the users
                const comments: IComment[] = response.data;
                dispatch(loadCommentsByPostSuccess(id,comments));
            })
            .catch((error) => {
                // error.message is the error message
                dispatch(loadCommentsByPostError(error.message));
            });
    };
};

export const addCommentRequested = (id: number, data: IComment[]) => {
    return {
        type: CommentActions.ADD_COMMENT_REQUESTED,
        payload: {
            id: id,
            comments: data
        } as CommentPayload
    };
};

export const addCommentSuccess = (id: number) => {
    return {
        type: CommentActions.ADD_COMMENT_SUCCESS,
        payload: id
};
}

export const addCommentError = (error: string) => {
    return {
        type: CommentActions.ADD_COMMENT_ERROR,
        payload: error,
    };
};

export const addNewComment = (postId: number, comment: IComment): AppThunk  => {
    return  async function (dispatch:AppDispatch) {
        dispatch(addCommentRequested(postId, [comment]));
        await axios
            .post(`${JSON_SERVER}/comments`, comment)
            .then((response) => {
                console.log(`Comment Created with ID ${response.data.id}`);
                dispatch(addCommentSuccess(postId));
            })
            .catch((error) => {
                // error.message is the error message
                dispatch(addCommentError(error.message));
            });
        dispatch(loadCommmentsByPostId(postId));
    };
};

