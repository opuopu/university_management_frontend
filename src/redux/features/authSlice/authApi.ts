import { BaseApi } from "@/redux/api/BaseApi";

const authApi = BaseApi.injectEndpoints({
  endpoints: (buider) => ({
    userLogin: buider.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
