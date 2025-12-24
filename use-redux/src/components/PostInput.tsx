import { useState } from "react";
import { Box, Button, Input, Flex, Textarea } from "@chakra-ui/react";
import { addPost, loadAllPosts } from "@/data/actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import type { PostsStore } from "@/store";

export default function PostInput() {
    const [newPostTitle, setNewPostTitle] = useState<string>("");
    const [newPostBody, setNewPostBody] = useState<string>("");

    const currentMaxId = useSelector((state: PostsStore) => state.posts.length);
    const dispatch = useDispatch();

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
                <Button
                    colorPalette="blue"
                    onClick={() =>
                        dispatch(
                            addPost({
                                userId: 1,
                                id: currentMaxId + 1,
                                title: newPostTitle,
                                body: newPostBody,
                            })
                        )
                    }
                >
                    Post
                </Button>
                <Button
                    colorPalette="orange"
                    variant="outline"
                    onClick={() => dispatch(loadAllPosts())}
                >
                    Load From Database
                </Button>
            </Flex>
        </Box>
    );
}
