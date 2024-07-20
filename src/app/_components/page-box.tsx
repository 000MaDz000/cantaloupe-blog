import { Box } from "@mui/material";
import Header from "./header";
import Footer from "./footer";

export default async function PageBox({ children, withHeader, withFooter }: { children: React.ReactNode, withHeader?: boolean, withFooter?: boolean }) {
    return (
        <Box className="flex flex-col gap-1 min-h-screen dark:bg-zinc-600">
            {withHeader && <Header />}
            <Box className="grow bg-slate-100 dark:bg-inherit">
                {children}
            </Box>

            {withFooter && <Footer></Footer>}
        </Box>

    )
}