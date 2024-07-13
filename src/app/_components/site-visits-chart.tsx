'use client';
import { BarChart } from "@mui/x-charts";

export default function SiteVisitsChart() {
    return (
        <BarChart
            series={[{
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1500, 0, 0],
            }]}
            height={400}
        />
    )
}

