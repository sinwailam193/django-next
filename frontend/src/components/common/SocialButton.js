"use client";

import { ImGoogle } from "react-icons/im";

import { continueWithGoogle } from "@/utils/continueWithSocialAuth";

export default function SocialButton() {
    return (
        <div className="flex justify-between items-center gap-2 mt-5">
            <button
                className="flex-1 text-white rounded-md px-3 mt-3 py-2 font-medium bg-red-500 hover:bg-red-400"
                onClick={continueWithGoogle}
            >
                <span className="flex justify-center items-center">
                    <ImGoogle className="mr-2" /> Google Signin
                </span>
            </button>
        </div>
    );
}
