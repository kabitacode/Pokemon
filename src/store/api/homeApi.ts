import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS, BASE_API_URL } from "../../config/api";
import { DetailType, HomeType } from "../../types";

export const homeApi = createApi({
    reducerPath: "homeApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (build) => ({
        getHome: build.query<HomeType, void>({
            query: () => API_ENDPOINTS.home
        }),
        getDetail: build.query<DetailType, string>({
            query: (name) => API_ENDPOINTS.detail(name)
        }),
    })
})

export const {
    useGetHomeQuery,
    useGetDetailQuery
} = homeApi