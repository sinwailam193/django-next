"use client";

import { useGoogleAuthenticateMutation } from "@/slice/features/authApiSlice";
import { useSocialAuth } from "@/hooks";
import { Spinner } from "@/components/common";

export default function GoogleAuth() {
    const [googleAuthenticate] = useGoogleAuthenticateMutation();
    useSocialAuth(googleAuthenticate, "google-oauth2");

    return (
        <div className="my-8">
            <Spinner lg />
        </div>
    );
}
