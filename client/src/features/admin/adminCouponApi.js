import { baseApi } from "../api/baseApi";

export const adminCouponApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminListCoupons: builder.query({
      query: (params) => ({ url: "/admin/coupons", params }),
      providesTags: ["Coupon"],
    }),
    adminGetCouponById: builder.query({
      query: (id) => ({ url: `/admin/coupons/${id}` }),
      providesTags: ["Coupon"],
    }),
    adminCreateCoupon: builder.mutation({
      query: (payload) => ({
        url: "/admin/coupons",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Coupon"],
    }),
    adminUpdateCoupon: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/admin/coupons/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Coupon"],
    }),
    adminDeleteCoupon: builder.mutation({
      query: (id) => ({
        url: `/admin/coupons/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Coupon"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAdminListCouponsQuery,
  useAdminGetCouponByIdQuery,
  useAdminCreateCouponMutation,
  useAdminUpdateCouponMutation,
  useAdminDeleteCouponMutation,
} = adminCouponApi;
