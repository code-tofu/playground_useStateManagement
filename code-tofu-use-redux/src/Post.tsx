import { Box, Heading, Text, Badge, VStack ,Button,HStack} from '@chakra-ui/react';
import type {PostProps } from './postTypes';


const Post: React.FC<PostProps> = ({postData,handleDeletePost}) => {
  return (
    <Box
      maxW="600px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      boxShadow="md"
      bg="white"
    >
      <VStack>
        <HStack>
          <Badge w="fit-content">User ID: {postData.userId}</Badge>
          <Text fontSize="sm" color="gray.500">
            Post ID: {postData.id}
          </Text>
          <Button onClick={() => handleDeletePost(postData.id)}>X</Button>
        </HStack>
        <Heading fontSize="xl">{postData.title}</Heading>
        <Text whiteSpace="pre-wrap">{postData.body}</Text>
      </VStack>
    </Box>
  );
}

export default Post; 