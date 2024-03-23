import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "@/slice/services/apiSlice";
import authReducer from "@/slice/features/authSlice";

export const makeStore = () =>
    configureStore({
        devTools: process.env.NODE_ENV !== "production",
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(apiSlice.middleware),
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            auth: authReducer,
        },
    });
