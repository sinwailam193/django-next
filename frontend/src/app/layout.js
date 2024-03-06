import { Inter } from "next/font/google";

import { Navbar, Footer } from "@/components/common";
import ReduxProvider from "@/slice/provider";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Django Next",
    description: "Django Next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </ReduxProvider>
            </body>
        </html>
    );
}
