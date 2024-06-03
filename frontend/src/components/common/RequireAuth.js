"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Spinner } from "@/components/common";

export default function RequireAuth({ children }) {
    const router = useRouter();
    const { isLoading, isAuthenticated } = useSelector((state) => state.auth);

    if (isLoading) {
        return (
            <div className="flex justify-center my-8">
                <Spinner lg />
            </div>
        );
    }

    if (!isAuthenticated) {
        toast.error("Must be logged in");
        router.push("/auth/login");
        return null;
    }

    return children;
}
