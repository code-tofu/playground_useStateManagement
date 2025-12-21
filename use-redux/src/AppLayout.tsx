import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { SimpleGrid, Flex, Center, VStack, Heading } from "@chakra-ui/react";
import data from "../db.json";
import Post from "./components/Post";
import PostInput from "./components/PostInput";

function AppLayout() {
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
                    {data.posts.map((post) => (
                        <Post key={post.id} {...post} />
                    ))}
                </SimpleGrid>
            </VStack>
        </Center>
    );
}

export default AppLayout;
