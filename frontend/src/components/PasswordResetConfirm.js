"use client";

import Form from "@/components/forms/Form";

import { usePasswordResetConfirm } from "@/hooks";

export default function PasswordResetConfirm({ params }) {
    const {
        newPassword,
        confirmNewPassword,
        isLoading,
        handleChange,
        handleSubmit,
    } = usePasswordResetConfirm({
        uid: params.uid,
        token: params.token,
    });

    return (
        <Form
            btnText="Confirm password"
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            config={[
                {
                    labelText: "Password",
                    type: "password",
                    labelId: "newPassword",
                    value: newPassword,
                    required: true,
                },
                {
                    labelText: "Confirm password",
                    type: "password",
                    labelId: "confirmNewPassword",
                    value: confirmNewPassword,
                    required: true,
                },
            ]}
        />
    );
}
