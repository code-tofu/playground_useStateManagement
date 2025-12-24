import {
    CommentActions,
    type CommentsActionsTypes,
} from "../actions/actionTypes";
import { type CommentsStore } from "@/store";
import data from "../../../db.json";
import type { IComment } from "@/types";


export const initialCommentsState = {
    comments: {},
};

export function commentsReducer(
    state: CommentsStore = initialCommentsState,
    action: CommentsActionsTypes
): CommentsStore {
    switch (action.type) {
        case CommentActions.LOAD_COMMENTS:
            return {
                ...state,
                comments:
                {...state.comments,
                [action.payload]: getCommentsByPostId(action.payload),
                }
            };
        default:
            return state;
    }
}

function getCommentsByPostId(postId: number): IComment[] {
    return data.comments.filter((comment) => comment.postId === postId);
}
