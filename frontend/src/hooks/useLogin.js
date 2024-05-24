import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { setAuth } from "@/slice/features/authSlice";
import { useLoginMutation } from "@/slice/features/authApiSlice";

export default function useLogin() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [login, { isLoading }] = useLoginMutation();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    function handleChange(event) {
        const { value, name } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await login(formData).unwrap();
            dispatch(setAuth());
            router.push("/dashboard");
        } catch (err) {
            toast.error("Failed to log in.");
        }
    }

    return {
        email,
        password,
        isLoading,
        handleChange,
        handleSubmit,
    };
}
