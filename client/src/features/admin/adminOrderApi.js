import { baseApi } from "../api/baseApi";

export const adminOrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminGetOrders: builder.query({
      query: (params) => ({ url: "/admin/orders", params }),
      providesTags: ["AdminOrder"],
    }),
    adminGetOrderById: builder.query({
      query: (id) => ({ url: `/admin/orders/${id}` }),
      providesTags: ["AdminOrder"],
    }),
    adminUpdateOrderStatus: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/admin/orders/${id}/status`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["AdminOrder", "Order"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAdminGetOrdersQuery,
  useAdminGetOrderByIdQuery,
  useAdminUpdateOrderStatusMutation,
} = adminOrderApi;
