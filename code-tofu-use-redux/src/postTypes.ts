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


