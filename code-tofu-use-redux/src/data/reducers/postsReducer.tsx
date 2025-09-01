import { PostsActions } from "../../postTypes";
import type { PostActionsTypes } from "../../postTypes";
import mockPosts from "../../../json-server-posts"
import type { Posts } from "../../postTypes";

export function postsReducer(data:Posts[] = [], action: PostActionsTypes) { 
  switch (action.type) {
    case PostsActions.ADD_POST:
      console.log("ADD_POST")
      return [...data, action.payload];;
    case PostsActions.DELETE_POST:
      console.log("DELETE_POST:" + action.payload)
      return data.filter((post) => post.id != action.payload)
    case PostsActions.LOAD_ALL:
      console.log("LOAD_ALL")
      return mockPosts;
    default:
      return data;
  }
};
