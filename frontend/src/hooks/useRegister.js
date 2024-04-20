import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { useRegisterMutation } from "@/slice/features/authApiSlice";

export default function useRegister() {
    const router = useRouter();
    const [register, { isLoading }] = useRegisterMutation();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { firstName, lastName, email, password, confirmPassword } = formData;

    function handleChange(event) {
        const { value, name } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        register(formData)
            .unwrap()
            .then(() => {
                toast.success("Please check email to verify account.");
                router.push("/auth/login");
            })
            .catch(() => {
                toast.error("Failed to register account.");
            });
    }

    return {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        isLoading,
        handleChange,
        handleSubmit,
    };
}
