import { useDispatch,useSelector } from "react-redux";
import type { IPost } from "../types";
import { Badge, Card, CloseButton, Button, Flex } from "@chakra-ui/react";
import { deletePost } from "../data/slices/postSlice";
import CommentsList from "./CommentsList";
import { useState } from "react";
import type { AppDispatch, RootState } from "../store";
import CommentInput from "./CommentInput";
import { loadCommmentsByPostId } from "../data/slices/commentSlice";

export default function PostDisplay({ userId, id, title, body }: IPost) {
    const dispatch = useDispatch<AppDispatch>();
    const [showComments, setShowComments] = useState(false);
    const [isAddComments, setIsAddComments] = useState(false);
    const [commentsLoaded, setCommentsLoaded] = useState(false);

    const toggleComments = () => {
        setIsAddComments(false);
        setShowComments(!showComments);
        if (!commentsLoaded && id !== undefined) {
            dispatch(loadCommmentsByPostId(id));
            setCommentsLoaded(true);
        }
    };

    const toggleAddComments = () => {
        setIsAddComments(!isAddComments);
        setShowComments(false);
    };

    const handlePostCommentToggle = () => {
        setShowComments(true);
        setIsAddComments(false);
    }

    const isLoading: boolean = useSelector(
        (state: RootState) => state.comments.loading
    );

    if (!id) {
        return (
            <Card.Root maxWidth={"lg"} minWidth={"sm"}>
                ; <Card.Body gap="2">Error: Post Cannot Be Loaded</Card.Body>
            </Card.Root>
        );
    }

    return (
        <Card.Root maxWidth={"lg"} minWidth={"sm"}>
            <Card.Body gap="2">
                <Flex gap="4" justify="space-between">
                    <Badge w="fit-content" colorPalette="blue">
                        Post ID: {id}
                    </Badge>
                    <CloseButton
                        variant="subtle"
                        size="xs"
                        onClick={() => dispatch(deletePost(id))}
                    />
                </Flex>
                <Card.Title mt="2">{title}</Card.Title>
                <Card.Description>{body}</Card.Description>
            </Card.Body>
            <Card.Footer>
                <Flex gap="4" justify="space-between">
                    <Badge w="fit-content" variant="subtle">
                        Posted by User {userId}
                    </Badge>
                    <Button
                        size="xs"
                        variant="outline"
                        colorPalette={showComments ? "orange" : "green"}
                        onClick={() => toggleComments()}
                        disabled={isLoading}
                    >
                        {showComments ? "Hide Comments" : "Show Comments"}
                    </Button>
                    <Button
                        size="xs"
                        variant="subtle"
                        colorPalette="yellow"
                        onClick={() => toggleAddComments()}
                    >
                        Add Comment
                    </Button>
                </Flex>
            </Card.Footer>
            <Card.Footer>
                {showComments && <CommentsList postId={id} />}
                {isAddComments && <CommentInput postId={id} handlePostCommentToggle={handlePostCommentToggle} />}
            </Card.Footer>
        </Card.Root>
    );
}

