import './App.css'
import Post from './Post'
import React, { useState } from 'react';
import { HStack,Button,Input,SimpleGrid,Container} from '@chakra-ui/react'
import mockPosts from "../json-server-posts"
import type { Posts } from './postTypes';

function App() {
  const [postList,setPostList] = useState<Posts[]>(mockPosts);
  const [newPostTitle,setNewPostTitle] = useState<string>("");
  const [newPostBody,setNewPostBody] = useState<string>("");


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPostTitle(event.target.value);
  };
  const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPostBody(event.target.value);
  };

  const handleAddPost = () => {  
    const newPost:Posts = {
      userId:1,
      id:(postList.length + 1),
      title: newPostTitle,
      body: newPostBody,

    }
    console.log(newPost)
    setPostList([...postList,newPost])
  }

  const handleDeletePost = (deleteId: number) => {
    setPostList(postList.filter((post) => post.id != deleteId));
  };
  
  return (
    <>
    <Container padding="40px">

      <Input value={newPostTitle} onChange={handleInputChange} margin="5" placeholder="Title"/>
      <Input value={newPostBody} onChange={handleBodyChange} margin="5" placeholder="Body"/>
      <HStack margin="5">
        <Button>Load Posts</Button>
        <Button onClick={() => handleAddPost()} >Add Post</Button>
      </HStack>
      </Container>

        <SimpleGrid columns={[2, null, 3]} gap="40px" padding="40px">
      {postList.map((postData) => (
        <Post key={postData.id} postData={postData} handleDeletePost={handleDeletePost}/>
      ))}
        </SimpleGrid>

    </>
  );
}

export default App;