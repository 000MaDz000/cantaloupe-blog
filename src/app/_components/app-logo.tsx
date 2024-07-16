import { Typography } from "@mui/material";
import Link from "next/link";

export default function AppLogo() {
    return (
        <Link href={"/"}>
            <Typography variant="h5">{process.env.APP_LOGO}</Typography>
        </Link>
    )
}