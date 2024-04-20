import { Spinner } from "@/components/common";

export default function Forms() {
    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    First name
                </label>
                <div className="mt-2">
                    <input
                        id="firstName"
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="firstName"
                        type="text"
                        value={firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Last name
                </label>
                <div className="mt-2">
                    <input
                        id="lastName"
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="lastName"
                        type="text"
                        value={lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Password
                </label>
                <div className="mt-2">
                    <input
                        id="password"
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Confirm password
                </label>
                <div className="mt-2">
                    <input
                        id="confirmPassword"
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {isLoading ? <Spinner sm /> : "Sign up"}
                </button>
            </div>
        </form>
    );
}
