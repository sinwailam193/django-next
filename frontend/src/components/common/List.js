import { Spinner } from "@/components/common";

export default function List({ config }) {
    console.log(config);
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {config.map(({ label, value }, i) => (
                <li
                    key={i}
                    className="relative flex justify-between gap-x-6 py-5"
                >
                    <div>
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                            {label}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                            {value || <Spinner sm />}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
