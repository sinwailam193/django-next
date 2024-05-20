"use client";

import { useRegister } from "@/hooks";
import Form from "@/components/forms/Form";

export default function SignupForm() {
    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        isLoading,
        handleChange,
        handleSubmit,
    } = useRegister();

    return (
        <Form
            btnText="Sign up"
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            config={[
                {
                    labelText: "First name",
                    type: "text",
                    labelId: "firstName",
                    value: firstName,
                    required: true,
                },
                {
                    labelText: "Last name",
                    type: "text",
                    labelId: "lastName",
                    value: lastName,
                    required: true,
                },
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
                    required: true,
                },
                {
                    labelText: "Confirm password",
                    type: "password",
                    labelId: "confirmPassword",
                    value: confirmPassword,
                    required: true,
                },
            ]}
        />
    );
}
