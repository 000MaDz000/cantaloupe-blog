import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import Script from "next/script";

if (!global.models) {
    global.models = {} as any;
}

export default async function RootLayout({ children }: any) {
    const locale = await getLocale();

    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <Script>
                    {`fetch("/api/visits",{method:"POST"}).catch(console.error)`}
                </Script>
            </head>

            <body dir={locale === "ar" ? "rtl" : "ltr"}>
                <NextIntlClientProvider messages={await getMessages()}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
} 