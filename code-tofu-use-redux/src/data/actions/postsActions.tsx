import type { Posts } from "../../postTypes";
import { PostsActions} from "../../postTypes";


export const loadAllPosts = () => {
  console.log("Load All Posts");
  return {
    type: PostsActions.LOAD_ALL,
  };
};
export const addPost = (data: Posts) => {
  console.log(`Create New Post with id ${data.id}`);
  return {
    type: PostsActions.ADD_POST,
    datpayloada: data,
  };
};
export const deletePost = (id: number) => {
  console.log(`Delete Post with id ${id}`);
  return {
    type: PostsActions.DELETE_POST,
    payload: id, 
  };
};

//object payload name needs to match interface type def