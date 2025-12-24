import { Timeline } from "@chakra-ui/react";
import CommentItem from "./CommentItem";
import type { CommentsStore } from "@/store";
import type { IComment } from "../types";
import { useSelector } from "react-redux";
import type { Root } from "react-dom/client";
import type { RootState } from "@/rootReducer";


function CommentsList({postId} : {postId:number}) {
    const comments: IComment[] = useSelector((state: RootState) => state.comments.comments[postId]);
    
    return (
        <Timeline.Root>
            {comments.map((comment: IComment, index) => (
                <CommentItem key={comment.id} comment={comment} num = {index + 1} />
            ))}
        </Timeline.Root>
    );
}

export default CommentsList;
