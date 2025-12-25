import type { IComment, IPost } from '../../types';

// export enum PostsActions {
//     LOAD_ALL = 'posts/LOAD_ALL',
//     ADD_POST = 'posts/ADD_POST',
//     DELETE_POST = 'posts/DELETE_POST'
// }
// error! This syntax is not allowed when 'erasableSyntaxOnly' is enabled.
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-8.html

//domain lowercase for visual clarity and matching the reducer name
export const PostActions = {
    LOAD_POSTS_REQUESTED: 'posts/LOAD_POSTS_REQUESTED',
    LOAD_POSTS_SUCCESS: 'posts/LOAD_POSTS_SUCCESS',
    LOAD_POSTS_ERROR:'posts/LOAD_POSTS_ERROR',
    ADD_POST: 'posts/ADD_POST',
    DELETE_POST: 'posts/DELETE_POST',
} as const

export interface LoadPostsRequestActionType {
    type: typeof PostActions.LOAD_POSTS_REQUESTED; //use type of for object instead of enum Namespace
}

export interface LoadPostsSuccessActionType {
    type: typeof PostActions.LOAD_POSTS_SUCCESS;
    payload: IPost[];
}

export interface LoadPostsErrorActionType {
    type: typeof PostActions.LOAD_POSTS_ERROR;
    payload: string //errormsg
}


export interface AddPostActionType {
    type: typeof PostActions.ADD_POST,
    payload: IPost 
}

export interface DeletePostActionType {
    type: typeof PostActions.DELETE_POST; 
    payload: number; //id
}


export type PostActionsTypes = LoadPostsRequestActionType | LoadPostsSuccessActionType | LoadPostsErrorActionType | AddPostActionType | DeletePostActionType;

export type CommentPayload = {
        id: number; 
        comments: IComment[];
}

export const CommentActions = {
    LOAD_COMMENTS_REQUESTED: 'comments/LOAD_COMMENTS_REQUESTED',
    LOAD_COMMENTS_SUCCESS: 'comments/LOAD_COMMENTS_SUCCESS',
    LOAD_COMMENTS_ERROR:'comments/LOAD_COMMENTS_ERROR',
} as const

export interface LoadCommentsByPostRequestActionType {
    type: typeof CommentActions.LOAD_COMMENTS_REQUESTED;
    payload: number; //id
}

export interface LoadCommentsByPostSuccessActionType {
    type: typeof CommentActions.LOAD_COMMENTS_SUCCESS;
    payload: CommentPayload
}

export interface LoadCommentsByPostErrorActionType {
    type: typeof CommentActions.LOAD_COMMENTS_ERROR;
    payload: string; //errormsg
}

export type CommentsActionsTypes = LoadCommentsByPostRequestActionType |LoadCommentsByPostSuccessActionType|LoadCommentsByPostErrorActionType;
//Discriminated unions only work when the discriminant is a literal type (i.e. CommentActions as const)
