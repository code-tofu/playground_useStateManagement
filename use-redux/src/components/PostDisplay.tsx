import { useDispatch } from "react-redux";
import type { Post } from "../types";
import { Badge, Card, CloseButton, Flex } from "@chakra-ui/react";
import { deletePost } from "../data/actions/postActions";


export default function PostDisplay({ userId, id, title, body }: Post) {
    
    const dispatch = useDispatch();

    return (    
        <Card.Root maxWidth={"lg"} minWidth={"sm"}>
            <Card.Body gap="2">
                <Flex gap="4" justify="space-between">
                    <Badge w="fit-content" colorPalette="blue">
                        Post ID: {id}
                    </Badge>
                    <CloseButton variant="subtle" size="xs" onClick={() => dispatch(deletePost(id))}/>
                </Flex>
                <Card.Title mt="2">{title}</Card.Title>
                <Card.Description>
                    {body}
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Badge w="fit-content" colorPalette="green" variant="outline">
                    User ID: {userId}
                </Badge>
            </Card.Footer>
        </Card.Root>
    );
}
