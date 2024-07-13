import ThemeSwitcher from "./theme-switcher";
import GoogleLoginButton from "./google-login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Box, Typography } from "@mui/material";
import session from "@/functions/session";
import SearchBar from "./search-bar";

export default async function Header() {
    const sess = await session();

    return (
        <div className="flex items-center px-5 py-2 gap-4 justify-between bg-gray-200 dark:bg-slate-800 dark:text-white w-full relative">
            <Typography variant="h5">{process.env.APP_LOGO}</Typography>
            <SearchBar />
            <Box className="flex justify-end items-center">
                <ThemeSwitcher />


                {
                    sess.data.user ? (
                        <></>
                    ) : (
                        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
                            <GoogleLoginButton />
                        </GoogleOAuthProvider>
                    )
                }

            </Box>
        </div>
    )
}