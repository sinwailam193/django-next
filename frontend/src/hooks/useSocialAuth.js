import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { setAuth } from "@/slice/features/authSlice";

export default function useSocialAuth(authenticate, provider) {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const state = searchParams.get("state");
        const code = searchParams.get("code");

        if (code && state) {
            authenticate({ provider, code, state })
                .unwrap()
                .then(() => {
                    dispatch(setAuth());
                    toast.success("Successfully logged in");
                    router.push("/dashboard");
                })
                .catch((err) => {
                    toast.error("Failed to log in");
                    router.push("/auth/login");
                });
        }
    }, [authenticate, searchParams]);
}
