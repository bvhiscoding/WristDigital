import { baseApi } from "../api/baseApi";

export const catalogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHealth: builder.query({
      query: () => ({ url: "/health" }),
      providesTags: ["Health"],
    }),
    getBrands: builder.query({
      query: (params) => ({ url: "/brands", params }),
      providesTags: ["Brand"],
    }),
    getCategories: builder.query({
      query: (params) => ({ url: "/categories", params }),
      providesTags: ["Category"],
    }),
    getProducts: builder.query({
      query: (params) => ({ url: "/products", params }),
      providesTags: ["Product"],
    }),
    getProductBySlug: builder.query({
      query: (slug) => ({ url: `/products/${slug}` }),
      providesTags: ["Product"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetHealthQuery,
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductBySlugQuery,
} = catalogApi;
