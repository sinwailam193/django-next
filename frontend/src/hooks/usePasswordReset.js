import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { useResetPasswordMutation } from "@/slice/features/authApiSlice";

export default function usePasswordReset() {
    const router = useRouter();
    const [resetPassword, { isLoading }] = useResetPasswordMutation();
    const [email, setEmail] = useState("");

    function handleChange(event) {
        const { value } = event.target;

        setEmail(value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        resetPassword(email)
            .unwrap()
            .then(() => {
                setEmail("");
                toast.success("Request sent, check your email for reset link.");
            });
    }

    return {
        email,
        isLoading,
        handleChange,
        handleSubmit,
    };
}
