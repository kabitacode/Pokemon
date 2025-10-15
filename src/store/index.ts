import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "./api";

export const store = configureStore({
    reducer: {
        [homeApi.reducerPath]: homeApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}).concat(homeApi.middleware)
});


