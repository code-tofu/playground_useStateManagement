export interface IPost {
    userId: number;
    id?: number;
    title: string;
    body: string;
}

export interface IComment {
    postId: number;
    id?: number;
    name: string;
    email: string;
    body: string;
}

export type CommentMap = {
    [key: number]: IComment[];  //js will convert to string 
};

// instead of loading boolean:
// export type LoadingStates =  "init" | "requested" | "success" | "error"