"use client";

import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLogoutMutation } from "@/slice/features/authApiSlice";
import { logout as setLogout } from "@/slice/features/authSlice";

export default function Navbar() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [logout] = useLogoutMutation();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    function handleLogout() {
        logout()
            .unwrap()
            .then(() => dispatch(setLogout()))
            .finally(() => router.push("/"));
    }

    const authLinks = <div>AUTH LINKS</div>;
    const guestLinks = <div>GUEST LINKS</div>;

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link
                                        className="text-gray-300 rounded-md px-3 py-2 font-medium"
                                        href="/"
                                    >
                                        Django Next
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {isAuthenticated
                                            ? authLinks
                                            : guestLinks}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {isAuthenticated ? authLinks : guestLinks}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
