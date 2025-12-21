import { useState } from "react";
import { Box, Button, Input, Flex,Textarea } from "@chakra-ui/react";

export default function PostInput() {
    const [newPostTitle, setNewPostTitle] = useState<string>("");
    const [newPostBody, setNewPostBody] = useState<string>("");

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="xs"
            minWidth="600px"
            padding="5"
            marginBottom={"10"}
        >
            <Input
                value={newPostTitle}
                onChange={(event) => setNewPostTitle(event.target.value)}
                placeholder="Title"
                marginBottom={"5"}
            />
            <Textarea
                value={newPostBody}
                onChange={(event) => setNewPostBody(event.target.value)}
                placeholder="Body"
                marginBottom={"5"}
            />
            <Flex gap="4" justify="space-between">
                <Button colorPalette="blue">Post</Button>
                <Button colorPalette="orange" variant="outline">
                    Load From Database
                </Button>
            </Flex>
        </Box>
    );
}
