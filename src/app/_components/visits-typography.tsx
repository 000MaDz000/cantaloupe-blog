import { Typography } from "@mui/material";

export default function VisitsTypography({ month, visits }: { month: string, visits: number }) {
    return (
        <Typography className="flex justify-between w-full">
            <span>{month}</span>
            <span>{visits}</span>
        </Typography>
    )
}