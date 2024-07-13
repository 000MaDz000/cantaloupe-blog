import { Box, Container, Paper, Typography } from "@mui/material";
import DashboardPostsTable from "../_components/dashboard-posts-table";
import { getTranslations } from "next-intl/server";

export default async function DashboardHome() {
    const t = await getTranslations("Dashboard");

    return (

        <div className="mt-4">
            <Container>
                <Paper className="p-7 dark:bg-zinc-700 dark:text-gray-200">
                    <Typography variant="h6">{t("tables.posts.table title")}</Typography>
                    <Box className="max-h-96 overflow-y-auto">
                        <DashboardPostsTable />
                    </Box>
                </Paper>
            </Container>

        </div>
    )
}