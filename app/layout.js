import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
    title: "Waleed Nasir | Portfolio",
    description: "From code to design, bringing concepts to life with simplicity, style, and passion",
    verification: {
        google: "tC2z_qZ5kLJxh-zhRvLN-2qABoyQcageYKYJ_-1YwrY",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${dm_sans.className} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
