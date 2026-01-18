import { Timeline,Spinner } from "@chakra-ui/react";
import CommentItem from "./CommentItem";
import type { IComment } from "../types";
import {useLoadCommentsByPostIdQuery} from "../data/slices/apiSlice"

function CommentsList({postId} : {postId:number}) {
    
    const { data: comments,isLoading} = useLoadCommentsByPostIdQuery({id:postId}) //needs to be object
    
    return (
        <Timeline.Root>
            {isLoading && <Spinner size="sm"/>}
            {(!isLoading && comments && comments.length>0) && comments.map((comment: IComment, index) => (
                <CommentItem key={comment.id} comment={comment} num = {index + 1} id={comment.id} />
            ))}
        </Timeline.Root>
    );
}

export default CommentsList;
