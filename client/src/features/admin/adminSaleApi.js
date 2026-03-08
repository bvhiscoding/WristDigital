import { baseApi } from "../api/baseApi";

export const adminSaleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminListSales: builder.query({
      query: (params) => ({ url: "/admin/sales", params }),
      providesTags: ["Sale"],
    }),
    adminGetSaleById: builder.query({
      query: (id) => ({ url: `/admin/sales/${id}` }),
      providesTags: ["Sale"],
    }),
    adminCreateSale: builder.mutation({
      query: (payload) => ({
        url: "/admin/sales",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Sale"],
    }),
    adminUpdateSale: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/admin/sales/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Sale"],
    }),
    adminDeleteSale: builder.mutation({
      query: (id) => ({
        url: `/admin/sales/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Sale"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAdminListSalesQuery,
  useAdminGetSaleByIdQuery,
  useAdminCreateSaleMutation,
  useAdminUpdateSaleMutation,
  useAdminDeleteSaleMutation,
} = adminSaleApi;
