export interface Posts{
    "userId": number,
    "id": number,
    "title":  string,
    "body": string
}

export interface PostProps{
    key: number,
    postData: Posts,
    handleDeletePost: (deleteId: number) => void
}


//domain lowercase for visual clarity and matching the reducer name
export const PostsActions = {
    LOAD_ALL: 'posts/LOAD_ALL',
    ADD_POST: 'posts/ADD_POST',
    DELETE_POST: 'posts/DELETE_POST'
} as const


// export enum PostsActions {
//     LOAD_ALL = 'posts/LOAD_ALL',
//     ADD_POST = 'posts/ADD_POST',
//     DELETE_POST = 'posts/DELETE_POST'
// }
// error! This syntax is not allowed when 'erasableSyntaxOnly' is enabled.
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-8.html

export interface LoadAllActionType {
    type: typeof PostsActions.LOAD_ALL; //use type of for object instead of enum Namespace
    payload: null //?
}

export interface AddPostActionType {
    type: typeof PostsActions.ADD_POST,
    payload: Posts
}

export interface DeletePostActionType {
    type: typeof PostsActions.DELETE_POST; 
    payload: number; //id
}

export type PostActionsTypes = LoadAllActionType | AddPostActionType | DeletePostActionType;
