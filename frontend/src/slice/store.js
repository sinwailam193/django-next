import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "@/slice/services/apiSlice";
import authReducer from "@/slice/features/authSlice";

export const makeStore = () =>
    configureStore({
        devTools: process.env.NODE_ENV !== "production",
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            auth: authReducer,
        },
    });
