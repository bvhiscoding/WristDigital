import { baseApi } from "../api/baseApi";

export const adminBrandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBrand: builder.mutation({
      query: (payload) => ({
        url: "/admin/brands",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Brand"],
    }),
    updateBrand: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/admin/brands/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Brand"],
    }),
    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `/admin/brands/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Brand"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateBrandMutation,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
} = adminBrandApi;
