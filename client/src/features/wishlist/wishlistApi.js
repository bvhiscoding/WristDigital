import { baseApi } from "../api/baseApi";

export const wishlistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWishlist: builder.query({
      query: () => ({ url: "/wishlist" }),
      providesTags: ["Wishlist"],
    }),
    toggleWishlist: builder.mutation({
      query: (productId) => ({
        url: `/wishlist/toggle/${productId}`,
        method: "POST",
      }),
      invalidatesTags: ["Wishlist", "Product"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetWishlistQuery, useToggleWishlistMutation } = wishlistApi;
