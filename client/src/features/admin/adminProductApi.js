import { baseApi } from "../api/baseApi";

const toFormDataIfNeeded = (payload) => payload;

export const adminProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (payload) => ({
        url: "/admin/products",
        method: "POST",
        body: toFormDataIfNeeded(payload),
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/products/${id}`,
        method: "PATCH",
        body: toFormDataIfNeeded(data),
      }),
      invalidatesTags: ["Product"],
    }),
    updateProductStock: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/admin/products/${id}/stock`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/admin/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateProductMutation,
  useUpdateProductMutation,
  useUpdateProductStockMutation,
  useDeleteProductMutation,
} = adminProductApi;
