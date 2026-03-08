import { baseApi } from "../api/baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductReviews: builder.query({
      query: ({ productId, ...params }) => ({
        url: `/products/${productId}/reviews`,
        params,
      }),
      providesTags: ["Review"],
    }),
    createReview: builder.mutation({
      query: ({ productId, ...payload }) => ({
        url: `/products/${productId}/reviews`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Review", "Product"],
    }),
    updateReview: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/reviews/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Review", "Product"],
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Review", "Product"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductReviewsQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
