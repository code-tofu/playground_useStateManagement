import type { Post } from "../types";
import { Text, Badge, Card, CloseButton, Flex } from "@chakra-ui/react";

export default function Post({ userId, id, title, body }: Post) {
    return (
        <Card.Root maxWidth={"lg"}>
            <Card.Body gap="2">
                <Flex gap="4" justify="space-between">
                    <Badge w="fit-content" colorPalette="blue">
                        Post ID: {id}
                    </Badge>
                    <CloseButton variant="subtle" size="xs"/>
                </Flex>
                <Card.Title mt="2">{title}</Card.Title>
                <Card.Description>
                    <Text whiteSpace="pre-wrap">{body}</Text>
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
