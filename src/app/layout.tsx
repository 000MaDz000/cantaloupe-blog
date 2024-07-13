import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import isAdmin from "@/functions/is-admin";
import { redirect } from "next/navigation";
if (!global.models) {
    global.models = {} as any;
}

export default async function RootLayout({ children }: any) {
    const locale = await getLocale();
    const admin = await isAdmin();

    if (!admin) {
        redirect("/");
    }

    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
            </head>

            <body dir={locale === "ar" ? "rtl" : "ltr"}>
                <NextIntlClientProvider messages={await getMessages()}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
} 