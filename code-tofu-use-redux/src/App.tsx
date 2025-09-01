import './App.css'
import React, { useState } from 'react';
import { HStack,Button,Input,SimpleGrid,Container} from '@chakra-ui/react'
import type { Posts } from './postTypes';
import Post from './components/Post';
import { useDispatch,useSelector } from "react-redux";
import { addPost,deletePost, loadAllPosts } from './data/actions/postsActions';


function App() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts) //reducer type?
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
    dispatch(addPost(newPost))
  }

  
  return (
    <>
    <Container padding="40px">
    <Input value={newPostTitle} onChange={handleInputChange} margin="5" placeholder="Title"/>
      <Input value={newPostBody} onChange={handleBodyChange} margin="5" placeholder="Body"/>
      <HStack margin="5">
        <Button onClick={() => dispatch(loadAllPosts())}>Load Posts</Button>
        <Button onClick={() => handleAddPost()} >Add Post</Button>
      </HStack>
      </Container>
        <SimpleGrid columns={[2, null, 3]} gap="40px" padding="40px">
      {postList.map((postData) => (
        <Post key={postData.id} postData={postData} handleDeletePost={(id: number) => dispatch(deletePost(id))}/>
      ))}
        </SimpleGrid>

    </>
  );
}

export default App;

//note any change in the state will force the whole app to re-render. not optimised