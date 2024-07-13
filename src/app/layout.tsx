import { GoogleOAuthProvider } from "@react-oauth/google";

if (!global.models) {
    global.models = {} as any;
}

export default async function RootLayout({ children }: any) {
    return (
        <html lang="en">
            <body>
                <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
                    {children}
                </GoogleOAuthProvider>
            </body>
        </html>
    );
} 