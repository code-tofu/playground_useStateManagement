import type { IPost } from "../types";
import { Badge, Card, Button, Flex } from "@chakra-ui/react";
import CommentsList from "./CommentsList";
import { useState } from "react";
import CommentInput from "./CommentInput";

export default function PostDisplay({ userId, id, title, body }: IPost) {
    const [showComments, setShowComments] = useState(false);
    const [isAddComments, setIsAddComments] = useState(false);
    const [commentsLoaded, setCommentsLoaded] = useState(false);    
    const toggleComments = () => {
        setIsAddComments(false);
        setShowComments(!showComments);
        if (!commentsLoaded && id !== undefined) {
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

