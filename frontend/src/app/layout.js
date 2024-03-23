import { Inter } from "next/font/google";

import { Navbar, Footer, Setup } from "@/components/common";
import ReduxProvider from "@/slice/provider";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Django Next",
    description: "Django Next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full bg-white">
            <body className={`h-full ${inter.className}`}>
                <ReduxProvider>
                    <Navbar />
                    {children}
                    <Footer />
                    <Setup />
                </ReduxProvider>
            </body>
        </html>
    );
}
