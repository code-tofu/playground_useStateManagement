import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JSON_SERVER } from "../../constants";
import type { IPost, IComment } from "../../types";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: JSON_SERVER,
    }),
    tagTypes: ['posts', 'comments'],
    endpoints: (builder) => {
        return {
            getAllPosts: builder.query<IPost[], {limit: number}>({
                query: ({ limit }) =>
                    `/posts?_limit=${limit}`,
                providesTags: ['posts'],

            }),
            addNewPost: builder.mutation<IPost, IPost>({ //Omit<IPost, "id"> if id is not optional
                query: (post) => ({
                    url: "/posts",
                    method: "POST",
                    body: post,
                }),
            }),
            loadCommentsByPostId: builder.query<IComment[],{id:number}>({
                query: ({ id }) =>
                    `/comments?postId=${id}`,
                providesTags: (result, error, postId) => result ? [ { type: 'comments', id: postId.id }]: [{ type: 'comments', id: postId.id }],
            }),
            addNewComment: builder.mutation<IComment, IComment>({ 
                query: (comment) => ({
                    url: "/comments",
                    method: "POST",
                    body: comment,
                }),
                invalidatesTags: (result, error, arg) => [{ type: 'comments', id: arg.id }],
            }),
        };
    },
});

export const {useGetAllPostsQuery,useLazyGetAllPostsQuery,useAddNewPostMutation,useLoadCommentsByPostIdQuery,useAddNewCommentMutation } = apiSlice;