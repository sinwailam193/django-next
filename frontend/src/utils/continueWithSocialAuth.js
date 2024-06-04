import { toast } from "react-toastify";

export default async function continueWithSocialAuth(provider, redirect) {
    const url = `/api/o/${provider}/?redirect_uri=${
        process.env.NODE_ENV === "production"
            ? process.env.NEXT_PUBLIC_REDIRECT_URL
            : "http://localhost:3000"
    }/auth/${redirect}`;

    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
            credentials: "include",
        });
        const data = await res.json();

        if (res.status === 200 && typeof window !== "undefined") {
            window.location.replace(data.authorization_url);
        } else {
            toast.error("Please try again later.");
        }
    } catch (err) {
        toast.error("Please try again later.");
    }
}

export const continueWithGoogle = () =>
    continueWithSocialAuth("google-oauth2", "google");
