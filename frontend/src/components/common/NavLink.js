import Link from "next/link";
import cn from "classnames";

export default function NavLink({
    children,
    className,
    isSelected,
    isBanner,
    isMobile,
    onClick,
    href,
}) {
    const linkClassName = cn(
        className,
        "text-white rounded-md px-3 py-2 font-medium",
        {
            "bg-gray-900": isSelected,
            "text-gray-300 hover:bg-gray-700 hover:text-white":
                !isSelected && !isBanner,
            "block text-base": isMobile,
            "text-sm": !isMobile,
            "text-gray-300": isBanner,
        }
    );

    if (!href) {
        return (
            <span className={linkClassName} role="button" onClick={onClick}>
                {children}
            </span>
        );
    }

    return (
        <Link className={linkClassName} href={href}>
            {children}
        </Link>
    );
}
