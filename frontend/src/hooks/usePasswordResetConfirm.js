import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { useResetPasswordConfirmMutation } from "@/slice/features/authApiSlice";

export default function usePasswordResetConfirm({ uid, token }) {
    const router = useRouter();
    const [resetPasswordConfirm, { isLoading }] =
        useResetPasswordConfirmMutation();
    const [formData, setFormData] = useState({
        newPassword: "",
        confirmNewPassword: "",
    });

    const { newPassword, confirmNewPassword } = formData;

    function handleChange(event) {
        const { value, name } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        resetPasswordConfirm({ uid, token, newPassword, confirmNewPassword })
            .unwrap()
            .then(() => {
                setFormData({
                    newPassword: "",
                    confirmNewPassword: "",
                });
                toast.success("Password successfully updated.");
                router.push("/auth/login");
            });
    }

    return {
        newPassword,
        confirmNewPassword,
        isLoading,
        handleChange,
        handleSubmit,
    };
}
