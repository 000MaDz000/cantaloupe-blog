import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

const acceptedLocales = new Set(["ar", "en"]);

export default getRequestConfig(async () => {
    // locale detection
    const header = headers();
    let locale = (header.get("accept-language")?.slice(0, 2)) || "en";
    if (!acceptedLocales.has(locale)) locale = "en";

    if (process.env.NODE_ENV === "development") locale = "en";

    return {
        locale,
        messages: (await import(`../locales/${locale}.json`)).default
    };
});