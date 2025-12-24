import { useDispatch } from "react-redux";
import type { IPost } from "../types";
import { Badge, Card, CloseButton, Button, Flex } from "@chakra-ui/react";
import { deletePost, loadCommentsByPost } from "../data/actions/postActions";
import CommentsList from "./CommentsList";
import { useState } from "react";

export default function PostDisplay({ userId, id, title, body }: IPost) {
    const dispatch = useDispatch();
    const [showComments, setShowComments] = useState(false);
    const [commentsLoaded, setCommentsLoaded] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
        if(!commentsLoaded){
            dispatch(loadCommentsByPost(id));
            setCommentsLoaded(true);
        }
    };

    return (
        <Card.Root maxWidth={"lg"} minWidth={"sm"}>
            <Card.Body gap="2">
                comment
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
                    <Badge
                        w="fit-content"
                                                variant="subtle"

                    >
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
