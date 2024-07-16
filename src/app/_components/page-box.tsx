import { Box } from "@mui/material";
import Header from "./header";

export default async function PageBox({ children, withHeader }: { children: React.ReactNode, withHeader?: boolean }) {
    return (
        <Box className="flex flex-col gap-1 min-h-screen dark:bg-zinc-600">
            {withHeader && <Header />}
            <Box className="grow bg-slate-100 dark:bg-inherit">
                {children}
            </Box>
        </Box>

    )
}