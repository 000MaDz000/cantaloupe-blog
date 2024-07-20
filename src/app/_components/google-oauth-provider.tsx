import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactNode } from "react";

export default function OAuthProvider({ children }: { children: ReactNode }) {
    return (
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
            {children}
        </GoogleOAuthProvider>
    )
}