import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS, BASE_API_URL } from "../../config/api";
import { DetailType, HomeType } from "../../types";

export const FetchApi = createApi({
    reducerPath: "FetchApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (build) => ({
        getHome: build.query<HomeType[], void>({
            query: () => API_ENDPOINTS.home
        }),
        getDetail: build.query<DetailType, { id: number }>({
            query: ({ id }) => API_ENDPOINTS.detail(id)
        }),
    })
})