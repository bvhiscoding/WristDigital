import { baseApi } from "../api/baseApi";

export const adminDashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminGetOverview: builder.query({
      query: (params) => ({ url: "/admin/dashboard/overview", params }),
      providesTags: ["Dashboard"],
    }),
  }),
  overrideExisting: false,
});

export const { useAdminGetOverviewQuery } = adminDashboardApi;
