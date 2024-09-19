'use client';
import Logout from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const t = useTranslations("Index");
    const router = useRouter();


    const logout = async () => {
        try {
            await axios.patch("/api/auth/google");
            router.refresh();
        }
        catch (err) {
            console.error(err);
        }

    }
    return (
        <Tooltip title={t("logout")}>
            <IconButton onClick={logout}>
                <Logout />
            </IconButton>
        </Tooltip>
    )
}