import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Waleed Nasir | Portfolio",
    description: "From code to design, bringing concepts to life with simplicity, style, and passion",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
