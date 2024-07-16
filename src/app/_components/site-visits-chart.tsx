'use client';
import { BarChart } from "@mui/x-charts";

export default function SiteVisitsChart({ data }: { data: number[] }) {
    return (
        <BarChart
            series={[{
                data,
            }]}
            height={400}
        />
    )
}

