'use client';
import { Box, IconButton, Paper, Typography } from "@mui/material";
import DashboardPostsTable from "./dashboard-posts-table";
import { useTranslations } from "next-intl";
import { AddCircle } from "@mui/icons-material";
import { useRouter } from "next/navigation";
export default function DashboardPostsPaper({ draft }: { draft?: boolean }) {
    const t = useTranslations("Dashboard.tables.posts");
    const router = useRouter();

    return (
        <Paper className="p-7 dark:bg-zinc-700 dark:text-gray-200">
            <Box className="flex justify-between">
                <Typography variant="h5">{draft ? t("draft posts title") : t("table title")}</Typography>

                {!draft && (
                    <IconButton onClick={() => router.push("/dashboard/posts/create")}>
                        <AddCircle />
                    </IconButton>
                )}
            </Box>

            <Box>
                <DashboardPostsTable draft={draft} />
            </Box>
        </Paper>
    )
}