"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { useActivationMutation } from "@/slice/features/authApiSlice";

export default function AccountActivation({ params }) {
    const router = useRouter();
    const [activation] = useActivationMutation();

    useEffect(() => {
        const { uid, token } = params;

        activation({ uid, token })
            .unwrap()
            .then(() => toast.success("Account activated"))
            .catch(() => toast.error("Failed to activate account"))
            .finally(() => router.push("/auth/login"));
    }, []);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Activating your account...
                </h1>
            </div>
        </div>
    );
}
