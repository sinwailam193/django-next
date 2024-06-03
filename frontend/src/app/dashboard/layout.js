import { RequireAuth } from "@/components/common";

export default function Layout({ children }) {
    return <RequireAuth>{children}</RequireAuth>;
}
