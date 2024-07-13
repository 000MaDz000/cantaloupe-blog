'use client';

import { Login } from "@mui/icons-material";
import { Box, Dialog, DialogTitle, IconButton, Tooltip } from "@mui/material";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GoogleLoginButton() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [err, setErr] = useState("");
    const t = useTranslations("Index");
    const router = useRouter();

    const onSuccess: any = async (data: { access_token: string }) => {
        const responseToken = data.access_token;
        const res = await axios.post("/api/auth/google", {
            access_token: responseToken,
        })
            .then(response => {
                // if the server tells us to render to an other page, render it
                if (response.headers["x-redirect"]) {
                    router.replace(response.headers["x-redirect"]);
                }

                return response.status;
            })
            // if there is error in the request, popup an error
            .catch(() => setErr("errors.login fails"))

        // if success response, hide the button
        // else popup an error
        if (res === 200) {
            setIsLoggedIn(true);
        }
        else {
            setErr("errors.login fails");
        }
    }

    const login = useGoogleLogin({
        onSuccess,
    });


    return (
        !isLoggedIn && (
            <Box>
                <GoogleLogin onSuccess={onSuccess} containerProps={{ className: "hidden" }} />

                <Tooltip title={t("login")}>
                    <IconButton onClick={() => login()} size="large">
                        <Login />
                    </IconButton>
                </Tooltip>

                {
                    err && (
                        <Dialog open onClose={() => setErr("")} PaperProps={{ className: "w-screen mx-4 sm:w-[75vw] md:w-[50vw]" }}>
                            <DialogTitle color={"error"} textAlign={"center"}>{t(err)}</DialogTitle>
                        </Dialog>
                    )
                }
            </Box>
        )
    )
}