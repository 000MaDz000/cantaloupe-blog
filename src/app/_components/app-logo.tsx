import { Typography } from "@mui/material";

export default function AppLogo() {
    return (
        <Typography variant="h5">{process.env.APP_LOGO}</Typography>
    )
}