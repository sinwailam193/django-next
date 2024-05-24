import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setAuth, finishInitialLoad } from "@/slice/features/authSlice";
import { useVerifyMutation } from "@/slice/features/authApiSlice";

export default function useVerify() {
    const dispatch = useDispatch();
    const [verify] = useVerifyMutation();

    useEffect(() => {
        verify()
            .unwrap()
            .then(() => dispatch(setAuth()))
            .finally(() => dispatch(finishInitialLoad()));
    }, []);
}
