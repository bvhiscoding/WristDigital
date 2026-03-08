import { baseApi } from "../api/baseApi";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    checkout: builder.mutation({
      query: (payload) => ({
        url: "/orders/checkout",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Order", "Cart"],
    }),
    getMyOrders: builder.query({
      query: (params) => ({ url: "/orders/my-orders", params }),
      providesTags: ["Order"],
    }),
    getMyOrderById: builder.query({
      query: (id) => ({ url: `/orders/${id}` }),
      providesTags: ["Order"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCheckoutMutation,
  useGetMyOrdersQuery,
  useGetMyOrderByIdQuery,
} = orderApi;
