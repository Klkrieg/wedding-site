import "./globals.css";
import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import { responseTheme } from "../contexts/global-content";

import { GlobalContextProvider } from "@/contexts/global-content";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
const inter = Courier_Prime({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Sweet&Cheesy",
    description: "A website about our faces and our wedding.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <GlobalContextProvider>
            <html lang='en' className={inter.className}>
                <ThemeProvider theme={responseTheme}>
                    <body>{children}</body>
                </ThemeProvider>
            </html>
        </GlobalContextProvider>
    );
}
