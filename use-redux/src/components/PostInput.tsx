import { useState } from "react";
import {
    Box,
    Button,
    Input,
    Flex,
    Textarea,
    NumberInput,
} from "@chakra-ui/react";
import { addNewPost, loadAllPosts } from "@/data/actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";

export default function PostInput() {
    const [newPostTitle, setNewPostTitle] = useState<string>("");
    const [newPostBody, setNewPostBody] = useState<string>("");
    const [loadLimit, setLoadLimit] = useState<number>(10);

    const isLoading: boolean = useSelector(
        (state: RootState) => state.posts.loading
    );

    // const currentMaxId = useSelector((state: PostsStore) => state.posts.length);
    const dispatch = useDispatch<AppDispatch>();

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
                            addNewPost({
                                userId: 1,
                                title: newPostTitle,
                                body: newPostBody,
                            })
                        )
                    }
                >
                    Post
                </Button>
                <Flex>
                    <NumberInput.Root
                        maxW="75px"
                        value={loadLimit.toString()}
                        min={1} max={100}
                        onValueChange={(e) => setLoadLimit(parseInt(e.value))}
                    >
                        <NumberInput.Control />
                        <NumberInput.Input />
                    </NumberInput.Root>

                    <Button
                        colorPalette="orange"
                        variant="outline"
                        onClick={() => dispatch(loadAllPosts(loadLimit))}
                        loading={isLoading}
                        disabled={isLoading}
                    >
                        Load From Database
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}
