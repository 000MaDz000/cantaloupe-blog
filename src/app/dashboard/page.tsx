'use client';
import { Box, Container, Paper, Typography, } from "@mui/material";
import DashboardPostsPaper from "../_components/dashboard-posts-paper";
import SiteVisitsChart from "../_components/site-visits-chart";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import VisitsTypography from "../_components/visits-typography";
import { IStatistics } from "@/models/statistics";


interface DataType {
    total: IStatistics,
    months: IStatistics[];
}

export default function DashboardHome() {
    const t = useTranslations("Dashboard");
    const [visits, setVisits] = useState<DataType | null>();
    const [pending, setPending] = useState(true);

    useEffect(() => {
        if (pending) {
            fetch("/api/visits").then(res => res.json()).then(setVisits);
            setPending(false);
        }
    }, [pending]);

    const monthData = useMemo(() => {
        const data = new Array(12).fill(0);

        for (let visit of visits?.months || []) {
            const index = visit.date?.month || 0 - 1;
            data[index] = visit.count;
        }

        return data;
    }, [visits]);


    return (

        <div className="mt-4">
            <Container>
                <div className="flex flex-col gap-4">

                    <Paper className="p-7 dark:bg-zinc-700 dark:text-gray-200 dark:[&_*]text-gray-200">
                        <Box>
                            <Typography>{t("charts.visits.title", { in: new Date().getFullYear() })}</Typography>
                        </Box>

                        <Box className="flex flex-col justify-between lg:flex-row">
                            <Box className="lg:w-3/4">
                                <SiteVisitsChart data={monthData} />
                            </Box>

                            <Box className="grow bg-green-100 dark:bg-green-800 p-7">
                                <Typography variant="h6">{t("charts.visits.summary")}</Typography>
                                <VisitsTypography visits={monthData[0]} month={t("months." + 1)} />
                                <VisitsTypography visits={monthData[1]} month={t("months." + 2)} />
                                <VisitsTypography visits={monthData[2]} month={t("months." + 3)} />
                                <VisitsTypography visits={monthData[3]} month={t("months." + 4)} />
                                <VisitsTypography visits={monthData[4]} month={t("months." + 5)} />
                                <VisitsTypography visits={monthData[5]} month={t("months." + 6)} />
                                <VisitsTypography visits={monthData[6]} month={t("months." + 7)} />
                                <VisitsTypography visits={monthData[7]} month={t("months." + 8)} />
                                <VisitsTypography visits={monthData[8]} month={t("months." + 9)} />
                                <VisitsTypography visits={monthData[9]} month={t("months." + 10)} />
                                <VisitsTypography visits={monthData[10]} month={t("months." + 11)} />
                                <VisitsTypography visits={monthData[11]} month={t("months." + 12)} />
                            </Box>

                        </Box>
                    </Paper>

                    <DashboardPostsPaper />
                </div>
            </Container>

        </div>
    )
}