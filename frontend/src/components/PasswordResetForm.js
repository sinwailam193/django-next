"use client";

import Form from "@/components/forms/Form";
import { usePasswordReset } from "@/hooks";

export default function PasswordResetForm() {
    const { email, isLoading, handleChange, handleSubmit } = usePasswordReset();

    return (
        <Form
            btnText="Reset password"
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
            ]}
        />
    );
}
