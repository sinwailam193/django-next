export default function Input({
    children,
    type,
    labelId,
    value,
    onChange,
    required = false,
}) {
    return (
        <div>
            <label
                htmlFor={labelId}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {children}
            </label>
            <div className="mt-2">
                <input
                    id={labelId}
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name={labelId}
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            </div>
        </div>
    );
}
