"use client";

import Form from "@/components/forms/Form";
import { useLogin } from "@/hooks";

export default function LoginForm() {
    const { email, password, isLoading, handleChange, handleSubmit } =
        useLogin();

    return (
        <Form
            btnText="Log in"
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            config={[
                {
                    labelText: "Email",
                    type: "text",
                    labelId: "email",
                    value: email,
                    required: true,
                },
                {
                    labelText: "Password",
                    type: "password",
                    labelId: "password",
                    value: password,
                    link: {
                        linkText: "Forgot password?",
                        linkUrl: "/password-reset",
                    },
                    required: true,
                },
            ]}
        />
    );
}
