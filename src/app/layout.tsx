import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { getMessages } from "next-intl/server";
if (!global.models) {
    global.models = {} as any;
}

export default async function RootLayout({ children }: any) {
    return (
        <html lang="en">
            <body>
                <NextIntlClientProvider messages={await getMessages()}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
} 