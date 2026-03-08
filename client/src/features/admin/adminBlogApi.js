import { baseApi } from "../api/baseApi";

export const adminBlogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminGetBlogs: builder.query({
      query: (params) => ({ url: "/admin/blogs", params }),
      providesTags: ["AdminBlog", "Blog"],
    }),
    adminCreateBlog: builder.mutation({
      query: (payload) => ({
        url: "/admin/blogs",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["AdminBlog", "Blog"],
    }),
    adminUpdateBlog: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/admin/blogs/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["AdminBlog", "Blog"],
    }),
    adminDeleteBlog: builder.mutation({
      query: (id) => ({
        url: `/admin/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AdminBlog", "Blog"],
    }),
    adminGetComments: builder.query({
      query: (params) => ({ url: "/admin/comments", params }),
      providesTags: ["Comment"],
    }),
    adminUpdateCommentStatus: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/admin/comments/${id}/status`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Comment", "Blog"],
    }),
    adminDeleteComment: builder.mutation({
      query: (id) => ({
        url: `/admin/comments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comment", "Blog"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAdminGetBlogsQuery,
  useAdminCreateBlogMutation,
  useAdminUpdateBlogMutation,
  useAdminDeleteBlogMutation,
  useAdminGetCommentsQuery,
  useAdminUpdateCommentStatusMutation,
  useAdminDeleteCommentMutation,
} = adminBlogApi;
