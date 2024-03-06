import { configureStore } from "@reduxjs/toolkit";

import authReducer from "@/slice/features/authSlice";

export const makeStore = () =>
    configureStore({
        devTools: process.env.NODE_ENV !== "production",
        reducer: {
            auth: authReducer,
        },
    });
