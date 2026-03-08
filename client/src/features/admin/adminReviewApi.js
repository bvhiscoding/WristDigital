import { baseApi } from "../api/baseApi";

export const adminReviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminGetReviews: builder.query({
      query: (params) => ({ url: "/admin/reviews", params }),
      providesTags: ["AdminReview", "Review"],
    }),
    adminReplyReview: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/admin/reviews/${id}/reply`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["AdminReview", "Review"],
    }),
    adminDeleteReview: builder.mutation({
      query: (id) => ({
        url: `/admin/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AdminReview", "Review"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAdminGetReviewsQuery,
  useAdminReplyReviewMutation,
  useAdminDeleteReviewMutation,
} = adminReviewApi;
