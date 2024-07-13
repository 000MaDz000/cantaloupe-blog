'use client';
import { Box, Container, Paper, Typography, } from "@mui/material";
import DashboardPostsPaper from "../_components/dashboard-posts-paper";
import SiteVisitsChart from "../_components/site-visits-chart";
import { useTranslations } from "next-intl";
import { useState } from "react";
import VisitsTypography from "../_components/visits-typography";

export default function DashboardHome() {
    const t = useTranslations("Dashboard");
    const [month, setMonth] = useState(new Date().getMonth() + 1);

    return (

        <div className="mt-4">
            <Container>
                <div className="flex flex-col gap-4">

                    <Paper className="p-7 dark:bg-zinc-700 dark:text-gray-200 dark:[&_*]text-gray-200">
                        <Box>
                            <Typography>{t("charts.visits.title", { month: t("months." + month) })}</Typography>
                        </Box>

                        <Box className="flex flex-col justify-between lg:flex-row">
                            <Box className="lg:w-3/4">
                                <SiteVisitsChart />
                            </Box>

                            <Box className="grow bg-green-100 dark:bg-green-800 p-7">
                                <Typography variant="h6">{t("charts.visits.summary")}</Typography>
                                <VisitsTypography visits={0} month={t("months." + 1)} />
                                <VisitsTypography visits={0} month={t("months." + 2)} />
                                <VisitsTypography visits={0} month={t("months." + 3)} />
                                <VisitsTypography visits={0} month={t("months." + 4)} />
                                <VisitsTypography visits={1500} month={t("months." + 5)} />
                                <VisitsTypography visits={1500} month={t("months." + 6)} />
                                <VisitsTypography visits={154} month={t("months." + 7)} />
                                <VisitsTypography visits={140} month={t("months." + 8)} />
                                <VisitsTypography visits={15} month={t("months." + 9)} />
                                <VisitsTypography visits={450} month={t("months." + 10)} />
                                <VisitsTypography visits={150} month={t("months." + 11)} />
                                <VisitsTypography visits={150} month={t("months." + 12)} />
                            </Box>

                        </Box>
                    </Paper>

                    <DashboardPostsPaper />
                </div>
            </Container>

        </div>
    )
}