import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: [
    "Health",
    "Auth",
    "User",
    "Brand",
    "Category",
    "Product",
    "Cart",
    "Order",
    "Review",
    "Wishlist",
    "Blog",
    "Coupon",
    "Sale",
    "Dashboard",
    "Comment",
    "AdminOrder",
    "AdminReview",
    "AdminBlog",
  ],
  endpoints: () => ({}),
});
