"use client";

import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

import { Spinner } from "@/components/common";

export default function RequireAuth({ children }) {
    const { isLoading, isAuthenticated } = useSelector((state) => state.auth);

    if (isLoading) {
        return (
            <div className="flex justify-center my-8">
                <Spinner lg />
            </div>
        );
    }

    if (!isAuthenticated) {
        redirect("/auth/login");
    }

    return <>{children}</>;
}
