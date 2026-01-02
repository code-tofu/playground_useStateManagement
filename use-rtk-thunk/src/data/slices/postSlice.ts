import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { IPost } from "../../types";
import { JSON_SERVER } from "../../constants";
import axios, { AxiosError } from "axios";

export const initialPostsState = {
    posts: [] as IPost[],
    // loading: "init",
    loading: false,
    error: "",
}; //satisfies PostsState as PostsState

// interface PostsState {
//     posts: IPost[];
//     // loading: LoadingStates;
//     loading: boolean
//     error: string
// }

const postSlice = createSlice({
    name: "post",
    initialState: initialPostsState,
    reducers: {
        deletePost: (state, action) => {
            state.posts = state.posts.filter(
                (post) => post.id != action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadAllPosts.pending, (state) => {
            state.loading = false;
        });
        builder.addCase(loadAllPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        });
        builder.addCase(loadAllPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
        builder.addCase(addNewPost.pending, (state) => {
            state.loading = false;
        });
        builder.addCase(addNewPost.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        });
        builder.addCase(addNewPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export const { deletePost } = postSlice.actions;
export default postSlice.reducer;

export const loadAllPosts = createAsyncThunk(
    "posts/loadAllPosts",
    async (limit: number = 10, {rejectWithValue}) => {
        try {
            const response = await axios.get(
                `${JSON_SERVER}/posts?_limit=${limit}`
            );
            return response.data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue({
                message: error.message
            });
        }
    }
);

export const addNewPost = createAsyncThunk(
    "posts/addNewPost",
    async (newPost: IPost, { dispatch,rejectWithValue }) => {
        try {
            const response = await axios.post(`${JSON_SERVER}/posts`, newPost);
            console.log(`Post Created with ID ${response.data.id}`);
            const updatedPosts = await dispatch(loadAllPosts(10));
            if (loadAllPosts.fulfilled.match(updatedPosts)) {
                return updatedPosts.payload;
            } else {
                throw new Error("Reload Posts Failed");
            }
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue({
                message: error.message
            });
                }
    }
);
