import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setAuth, finishInitialLoad } from "@/slice/features/authSlice";
import { useVerifyMutation } from "@/slice/features/authApiSlice";

export default function useVerify() {
    const dispatch = useDispatch();
    const [verify] = useVerifyMutation();

    useEffect(() => {
        handleVerify();
    }, []);

    async function handleVerify() {
        try {
            await verify().unwrap();
            dispatch(setAuth());
        } finally {
            dispatch(finishInitialLoad());
        }
    }
}
