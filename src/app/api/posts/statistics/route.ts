import { Statistics } from "@/models";
import { IStatisticsName } from "@/models/statistics";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const draftsPosts = await Statistics.findOne({ name: IStatisticsName.draftPosts });
        const totalPosts = await Statistics.findOne({ name: IStatisticsName.totalPosts });
        const monthPosts = await Statistics.findOne({ name: IStatisticsName.monthPosts, date: { year, month } });
        const res = new NextResponse(JSON.stringify({
            drafts: draftsPosts || { name: IStatisticsName.draftPosts, count: 0 },
            total: totalPosts || { name: IStatisticsName.totalPosts, count: 0 },
            month: monthPosts || { name: IStatisticsName.monthPosts, count: 0 },
        }), { status: 200, headers: {} });

        res.headers.set("Content-Type", "application/json");
        return res;
    }
    catch (err) {

        const res = new NextResponse(JSON.stringify({
            drafts: { name: IStatisticsName.draftPosts, count: 0 },
            total: { name: IStatisticsName.totalPosts, count: 0 },
            month: { name: IStatisticsName.monthPosts, count: 0 },
        }), { status: 500, headers: {} });

        res.headers.set("Content-Type", "application/json");
        return res;
    }
}