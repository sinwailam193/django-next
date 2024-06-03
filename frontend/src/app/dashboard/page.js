"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { useRetrieveUserQuery } from "@/slice/features/authApiSlice";
import { List, Spinner } from "@/components/common";

export default function Page() {
    const router = useRouter();
    const { data: user, isLoading, isError } = useRetrieveUserQuery();

    if (isLoading) {
        return (
            <div className="flex justify-center my-8">
                <Spinner lg />
            </div>
        );
    }

    if (isError) {
        router.push("/auth/login");
        toast.error("please log in");
        return null;
    }

    return (
        <div className="px-8">
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Dashboard
                    </h1>
                </div>
            </header>
            <main className="mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8">
                <List
                    config={[
                        {
                            label: "First name",
                            value: user?.first_name,
                        },
                        {
                            label: "Last name",
                            value: user?.last_name,
                        },
                        {
                            label: "Email",
                            value: user?.email,
                        },
                    ]}
                />
            </main>
        </div>
    );
}
