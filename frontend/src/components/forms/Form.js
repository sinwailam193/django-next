import Input from "@/components/forms/Input";
import { Spinner } from "@/components/common";

export default function Form({
    handleSubmit,
    handleChange,
    config,
    isLoading,
    btnText,
}) {
    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {config.map((input) => (
                <Input
                    key={input.labelId}
                    type={input.type}
                    labelId={input.labelId}
                    value={input.value}
                    onChange={handleChange}
                    link={input.link}
                    required={input.required}
                >
                    {input.labelText}
                </Input>
            ))}
            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled={isLoading}
                >
                    {isLoading ? <Spinner sm /> : btnText}
                </button>
            </div>
        </form>
    );
}
