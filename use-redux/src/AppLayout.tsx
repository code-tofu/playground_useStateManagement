import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { SimpleGrid, Flex, Center, VStack, Heading } from "@chakra-ui/react";
import PostDisplay from "./components/PostDisplay";
import PostInput from "./components/PostInput";
import { useSelector } from "react-redux";
import type { PostStore } from "./store";
// import data from "../db.json";


function AppLayout() {
    
    const posts = useSelector((state: PostStore) => state.posts);

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
                        <Heading>use Redux-Sagas</Heading>
                        <Heading size="md">Vite + React</Heading>
                    </VStack>
                </div>
                <PostInput />
                <SimpleGrid columns={2} gap="40px">
                    {posts.map((post) => (
                        <PostDisplay key={post.id} {...post} />
                    ))}
                </SimpleGrid>
            </VStack>
        </Center>
    );
}

export default AppLayout;
