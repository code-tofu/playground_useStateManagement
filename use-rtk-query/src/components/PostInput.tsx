import { useState } from "react";
import {
    Box,
    Button,
    Input,
    Flex,
    Textarea,
    NumberInput,
} from "@chakra-ui/react";
import {
    useAddNewPostMutation,
    type useLazyGetAllPostsQuery,
} from "../data/slices/apiSlice";

type triggerType = ReturnType<typeof useLazyGetAllPostsQuery>[0];
export type PostInputProps = {
    trigger: triggerType;
    isPostLoading: boolean;
    loadLimit: number;
    setLoadLimit: (loadLimit: number) => void;
};

export default function PostInput({
    trigger,
    isPostLoading,
    loadLimit,
    setLoadLimit,
}: PostInputProps) {
    const [newPostTitle, setNewPostTitle] = useState<string>("");
    const [newPostBody, setNewPostBody] = useState<string>("");
    const [addNewPost,{isLoading}] = useAddNewPostMutation();

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
                    onClick={() => {
                        addNewPost({
                            userId: 1,
                            title: newPostTitle,
                            body: newPostBody,
                        });
                        trigger({ limit: loadLimit });
                    }}
                    disabled={isLoading}

                >
                    Post
                </Button>
                <Flex>
                    <NumberInput.Root
                        maxW="75px"
                        value={loadLimit.toString()}
                        min={1}
                        max={100}
                        onValueChange={(e) => setLoadLimit(parseInt(e.value))}
                    >
                        <NumberInput.Control />
                        <NumberInput.Input />
                    </NumberInput.Root>

                    <Button
                        colorPalette="orange"
                        variant="outline"
                        onClick={() => {
                            trigger({ limit: loadLimit });
                        }}
                        loading={isPostLoading}
                        disabled={isPostLoading}
                    >
                        Load From Database
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}
