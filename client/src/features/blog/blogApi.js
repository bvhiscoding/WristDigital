import { baseApi } from "../api/baseApi";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: (params) => ({ url: "/blogs", params }),
      providesTags: ["Blog"],
    }),
    getBlogBySlug: builder.query({
      query: (slug) => ({ url: `/blogs/${slug}` }),
      providesTags: ["Blog"],
    }),
    createBlogComment: builder.mutation({
      query: ({ blogId, ...payload }) => ({
        url: `/blogs/${blogId}/comments`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Blog", "Comment"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetBlogsQuery,
  useGetBlogBySlugQuery,
  useCreateBlogCommentMutation,
} = blogApi;
