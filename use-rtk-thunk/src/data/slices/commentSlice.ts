import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { JSON_SERVER } from "../../constants";
import type { IComment, CommentMap } from "../../types";
import axios, { AxiosError } from "axios";

interface CommmentsState {
    comments: CommentMap;
    loading: boolean;
    error: string;
}

export const initialCommentsState = {
    comments: {},
    loading: false,
    error: "",
} satisfies CommmentsState as CommmentsState;

const commentSlice = createSlice({
    name: "comments",
    initialState: initialCommentsState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadCommmentsByPostId.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadCommmentsByPostId.fulfilled, (state, action) => {
            state.loading = false;
            state.comments = {
                ...state.comments,
                [action.payload.id]: action.payload.comments,
            };
        });
        builder.addCase(loadCommmentsByPostId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
        builder.addCase(addNewComment.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addNewComment.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(addNewComment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export default commentSlice.reducer;

export const loadCommmentsByPostId = createAsyncThunk(
    "comments/loadCommmentsByPostId",
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${JSON_SERVER}/comments?postId=${id}`
            );
            return {
                id: id,
                comments: response.data,
            };
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue({
                message: error.message
            });
        }
    }
);

export const addNewComment = createAsyncThunk(
    "comments/addNewComment",
    async (args: { postId: number; comment: IComment }, { dispatch,rejectWithValue }) => {
        try {
            const { postId, comment } = args;
            const response = await axios.post(
                `${JSON_SERVER}/comments`,
                comment
            );
            console.log(`Comment Created with ID ${response.data.id}`);
            const updatedComments = await dispatch(
                loadCommmentsByPostId(postId)
            );
            if (loadCommmentsByPostId.fulfilled.match(updatedComments)) {
                return updatedComments.payload;
            } else {
                throw new Error("Reload Comments Failed");
            }
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue({
                message: error.message
            });        }
    }
);
