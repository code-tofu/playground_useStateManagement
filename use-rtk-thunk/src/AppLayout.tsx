import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
    SimpleGrid,
    Flex,
    Center,
    VStack,
    Heading,
    Spinner,
} from "@chakra-ui/react";
import PostDisplay from "./components/PostDisplay";
import PostInput from "./components/PostInput";
import { useSelector } from "react-redux";
import type { IPost } from "./types";
import type { RootState } from "./store";

function AppLayout() {
    const posts: IPost[] = useSelector((state: RootState) => state.posts.posts);
    const isLoading: boolean = useSelector(
        (state: RootState) => state.posts.loading
    );

    return (
        <Center>
            <VStack>
                <div>
                    <VStack margin={5}>
                        <Flex gap="4">
                            <img
                                src={viteLogo}
                                className="logo"
                                alt="Vite logo"
                            />
                            <img
                                src={reactLogo}
                                className="logo react"
                                alt="React logo"
                            />
                        </Flex>
                        <Heading>use Redux-Thunks</Heading>
                        <Heading size="md">Vite + React</Heading>
                    </VStack>
                </div>
                <PostInput />
                {isLoading && (
                    <Spinner
                        color="red.500"
                        css={{ "--spinner-track-color": "colors.gray.200" }}
                        size="xl"
                    />
                )}
                {!isLoading && posts.length > 0 && (
                    <SimpleGrid columns={2} gap="40px">
                        {posts.map((post) => (
                            <PostDisplay key={post.id} {...post} />
                        ))}
                    </SimpleGrid>
                )}
            </VStack>
        </Center>
    );
}

export default AppLayout;
