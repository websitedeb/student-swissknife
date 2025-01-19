import "./globals.css";
import { ReactQueryProvider } from "@/app/(provider)/query"; 

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
                />
            </head>
            <body className="bg-gradient-to-r from-[#000000] via-[#570000] to-[#000000] lg:overflow-hidden md:overflow-y-auto">
                <ReactQueryProvider>
                    {children}
                </ReactQueryProvider>
            </body>
        </html>
    );
}
