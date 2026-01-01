import { Timeline,Spinner } from "@chakra-ui/react";
import CommentItem from "./CommentItem";
import type { IComment } from "../types";
import { useSelector } from "react-redux";
import type { RootState } from "@/rootReducer";


function CommentsList({postId} : {postId:number}) {
    const comments: IComment[] = useSelector((state: RootState) => state.comments.comments[postId]);
    const isLoading: boolean = useSelector((state: RootState) => state.comments.loading);
    
    return (
        <Timeline.Root>
            {isLoading && <Spinner size="sm"/>}
            {(!isLoading && comments && comments.length>0) && comments.map((comment: IComment, index) => (
                <CommentItem key={comment.id} comment={comment} num = {index + 1} id={comment.id} />
            ))}
            {(!isLoading && comments && comments.length === 0) && <div> No Comments Available</div>}
        </Timeline.Root>
    );
}

export default CommentsList;
