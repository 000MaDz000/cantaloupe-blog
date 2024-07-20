import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import Script from "next/script";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
                    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
                        {children}
                    </GoogleOAuthProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
} 