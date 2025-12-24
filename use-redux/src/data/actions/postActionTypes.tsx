import type { Post } from '../../types';

// export enum PostsActions {
//     LOAD_ALL = 'posts/LOAD_ALL',
//     ADD_POST = 'posts/ADD_POST',
//     DELETE_POST = 'posts/DELETE_POST'
// }
// error! This syntax is not allowed when 'erasableSyntaxOnly' is enabled.
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-8.html

//domain lowercase for visual clarity and matching the reducer name
export const PostActions = {
    LOAD_ALL: 'posts/LOAD_ALL',
    ADD_POST: 'posts/ADD_POST',
    DELETE_POST: 'posts/DELETE_POST'
} as const

export interface LoadAllActionType {
    type: typeof PostActions.LOAD_ALL; //use type of for object instead of enum Namespace
    payload: null //?
}

export interface AddPostActionType {
    type: typeof PostActions.ADD_POST,
    payload: Post
}

export interface DeletePostActionType {
    type: typeof PostActions.DELETE_POST; 
    payload: number; //id
}

export type PostActionsTypes = LoadAllActionType | AddPostActionType | DeletePostActionType;

