import {
    CommentActions,
    type CommentsActionsTypes,
} from "../actions/actionTypes";
import { type CommentsStore } from "@/store";


export const initialCommentsState = {
    comments: {},
    loading: false,
    error: "",
};

export function commentsReducer(
    state: CommentsStore = initialCommentsState,
    action: CommentsActionsTypes
): CommentsStore {
    switch (action.type) {
        case CommentActions.LOAD_COMMENTS_REQUESTED:
            return { ...state, loading: true };
        case CommentActions.LOAD_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: { ...state.comments, [action.payload.id]: action.payload.comments},
            };
        case CommentActions.LOAD_COMMENTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload as string,
            };
        case CommentActions.ADD_COMMENT_REQUESTED:
            return { ...state, loading: true};
        case CommentActions.ADD_COMMENT_SUCCESS:
            return { ...state, loading: false};
        case CommentActions.ADD_COMMENT_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

// Add comment state not really required because state is refreshed from server on success. Adding will imply local update only without thunks

// function getCommentsByPostId(postId: number): IComment[] {
//     return data.comments.filter((comment) => comment.postId === postId);
// }
