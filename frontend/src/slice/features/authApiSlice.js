import { apiSlice } from "@/slice/services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        retrieveUser: builder.query({
            query: () => "/users/me/",
        }),
        googleAuthenticate: builder.mutation({
            query: ({ state, code }) => ({
                url: `/o/google-oauth2/?state=${encodeURIComponent(
                    state
                )}&code=${encodeURIComponent(code)}`,
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }),
        }),
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "/jwt/create/",
                method: "POST",
                body: {
                    email,
                    password,
                },
            }),
        }),
        register: builder.mutation({
            query: ({
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            }) => ({
                url: "/users/",
                method: "POST",
                body: {
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password,
                    re_password: confirmPassword,
                },
            }),
        }),
        verify: builder.mutation({
            query: () => ({
                url: "/jwt/verify/",
                method: "POST",
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/logout/",
                method: "POST",
            }),
        }),
        activation: builder.mutation({
            query: ({ uid, token }) => ({
                url: "/users/activation/",
                method: "POST",
                body: {
                    uid,
                    token,
                },
            }),
        }),
        resetPassword: builder.mutation({
            query: (email) => ({
                url: "/users/reset_password/",
                method: "POST",
                body: {
                    email,
                },
            }),
        }),
        resetPasswordConfirm: builder.mutation({
            query: ({ uid, token, newPassword, confirmNewPassword }) => ({
                url: "/users/reset_password_confirm/",
                method: "POST",
                body: {
                    uid,
                    token,
                    new_password: newPassword,
                    re_new_password: confirmNewPassword,
                },
            }),
        }),
    }),
});

export const {
    useRetrieveUserQuery,
    useGoogleAuthenticateMutation,
    useLoginMutation,
    useRegisterMutation,
    useVerifyMutation,
    useLogoutMutation,
    useActivationMutation,
    useResetPasswordMutation,
    useResetPasswordConfirmMutation,
} = authApiSlice;
