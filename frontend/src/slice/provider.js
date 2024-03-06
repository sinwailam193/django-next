"use client";

import { Provider } from "react-redux";

import { makeStore } from "@/slice/store";

export default function ReduxProvider({ children }) {
    return <Provider store={makeStore()}>{children}</Provider>;
}
