import { baseApi } from "../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({ url: "/users/me" }),
      providesTags: ["User"],
    }),
    updateMe: builder.mutation({
      query: (payload) => ({
        url: "/users/update-me",
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["User"],
    }),
    updatePassword: builder.mutation({
      query: (payload) => ({
        url: "/users/update-password",
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["User", "Auth"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetMeQuery,
  useUpdateMeMutation,
  useUpdatePasswordMutation,
} = userApi;
