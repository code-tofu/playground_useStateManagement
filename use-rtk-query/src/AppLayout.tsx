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
import { useLazyGetAllPostsQuery } from "./data/slices/apiSlice";
import { useState } from "react";

function AppLayout() {

    // const { data: posts,isLoading} = useGetAllPostsQuery({limit:10},{skip:true}) //needs to be object
    // trigger does not cause other lazy hooks in other components, hence need to lift
    const [trigger,{ isLoading,data:posts}] = useLazyGetAllPostsQuery()
    const [loadLimit, setLoadLimit] = useState<number>(10);

    
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
                <PostInput trigger={trigger} isPostLoading={isLoading} loadLimit={loadLimit} setLoadLimit={setLoadLimit}/>
                {isLoading && (
                    <Spinner
                        color="red.500"
                        css={{ "--spinner-track-color": "colors.gray.200" }}
                        size="xl"
                    />
                )}
                {!isLoading && posts && posts.length > 0 && (
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
