'use client';
import Logout from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useTranslations } from "next-intl";

export default function LogoutButton() {
    const t = useTranslations("Index");

    return (
        <Tooltip title={t("logout")}>
            <IconButton onClick={() => axios.patch("/api/auth/google")}>
                <Logout />
            </IconButton>
        </Tooltip>
    )
}