import { Box, Button, Grid, IconButton, Link, Typography } from "@mui/material";
import { Copyright, Facebook, X, YouTube } from "@mui/icons-material";
import GoogleLoginButton from "./google-login";
import { getTranslations } from "next-intl/server";
import OAuthProvider from "./google-oauth-provider";
import session from "@/functions/session";
import SearchBar from "./search-bar";

export default async function Footer() {
    const t = await getTranslations();
    const sess = await session();

    return (
        <Box className='flex flex-col gap-7 bg-gray-600 dark:text-white h-fit min-h-44 py-4 px-7'>
            <Box className="flex gap-1 [&_*]:text-gray-200">
                <IconButton>
                    <Facebook />
                </IconButton>

                <IconButton>
                    <X />
                </IconButton>

                <IconButton>
                    <YouTube />
                </IconButton>
            </Box>

            <Box className="flex flex-col gap-4">
                <Box className="flex flex-col gap-3 justify-center items-center grow text-white dark:text-inherit">
                    {
                        (
                            <OAuthProvider>
                                <Typography>{t("get notifications")}</Typography>
                                <GoogleLoginButton disabled={Boolean(sess.data.user)}>
                                    <Button disabled={Boolean(sess.data.user)} variant="contained" fullWidth>
                                        {t("login now")}
                                    </Button>
                                </GoogleLoginButton>
                            </OAuthProvider>
                        )
                    }
                </Box>

                <Box className="flex justify-evenly w-full mt-11 text-emerald-500 [&>*]:no-underline [&>a]:cursor-pointer mx-auto">
                    <Link className="hover:text-sky-700">{t("Terms.privacy")}</Link>
                    <Link className="hover:text-sky-700">{t("Terms.use")}</Link>
                    <Link className="hover:text-sky-700">{t("Terms.copyright")}</Link>
                </Box>

            </Box>

            <Typography className="text-white flex gap-2">
                <Copyright />
                MaDz 20/7/2024
            </Typography>
        </Box>
    )
}