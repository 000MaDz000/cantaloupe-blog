import isAdmin from "@/functions/is-admin";
import visitsCounter from "@/functions/visits";
import { Statistics } from "@/models";
import { IStatisticsName } from "@/models/statistics";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    await visitsCounter();
    const res = new NextResponse("", { status: 200 });;

    return res;
}

export async function GET(request: Request) {
    if (!(await isAdmin())) return notFound();
    const total = await Statistics.findOne({ "name": IStatisticsName.siteVisits });
    const months = await Statistics.find({ "name": IStatisticsName.monthSiteVisits, "date.year": new Date().getFullYear() });
    const data = {
        total,
        months
    };
    const json = JSON.stringify(data);
    const response = new NextResponse(json, { status: 200 });
    response.headers.set("Content-Type", "application/json");
    return response;
}