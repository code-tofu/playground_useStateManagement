import { useDispatch } from "react-redux";
import type { IPost } from "../types";
import { Badge, Card, CloseButton, Button, Flex } from "@chakra-ui/react";
import { deletePost } from "../data/actions/postActions";
import CommentsList from "./CommentsList";
import { useState } from "react";
import { loadCommmentsByPostId } from "../data/actions/commentActions";
import type { AppDispatch } from "../store";

export default function PostDisplay({ userId, id, title, body }: IPost) {
    const dispatch = useDispatch<AppDispatch>();
    const [showComments, setShowComments] = useState(false);
    const [commentsLoaded, setCommentsLoaded] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
        if (!commentsLoaded && id !== undefined) {
            dispatch(loadCommmentsByPostId(id));
            setCommentsLoaded(true);
        }
    };

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
                    >
                        {showComments ? "Hide Comments" : "Show Comments"}
                    </Button>
                </Flex>
            </Card.Footer>
            <Card.Footer>
                {showComments && <CommentsList postId={id} />}
            </Card.Footer>
        </Card.Root>
    );
}

// const mockPost: Post = {
//     id: 1,
//     title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     userId: 1,
// };
