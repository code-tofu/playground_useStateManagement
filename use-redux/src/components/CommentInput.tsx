import { Input, Textarea, VStack, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import type { AppDispatch, RootState } from "@/store";
import { addNewComment } from "../data/actions/commentActions";

function CommentInput({ postId }: { postId: number }) {
    const [newCommentName, setNewCommentName] = useState<string>("");
    const [newCommentEmail, setNewCommentEmail] = useState<string>("");
    const [newCommentBody, setNewCommentBody] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();
    const isLoading: boolean = useSelector(
            (state: RootState) => state.comments.loading
        );
    

    return (
        <VStack minWidth={"sm"}>
            <Input
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                placeholder="Name"
                marginBottom={"5"}
            />
            <Input
                value={newCommentEmail}
                onChange={(e) => setNewCommentEmail(e.target.value)}
                type="email"
                placeholder="Email"
                marginBottom={"5"}
            />
            <Textarea
                value={newCommentBody}
                onChange={(e) => setNewCommentBody(e.target.value)}
                placeholder="Comment"
                marginBottom={"5"}
            />
            <Button
                colorPalette="blue"
                onClick={() =>
                    dispatch(
                        addNewComment(postId, {
                            postId: postId,
                            name: newCommentName,
                            email: newCommentEmail,
                            body: newCommentBody,
                        })
                    )
                }
                loading={isLoading}
                disabled={isLoading}
            >Post Comment</Button>
        </VStack>
    );
}

export default CommentInput;

