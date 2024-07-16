import { Statistics } from "@/models";
import { IStatisticsName } from "@/models/statistics";
import { cookies } from "next/headers";

export default async function visitsCounter() {
    const cookie = cookies();
    const cookieName = "VISITS_COUNTER";
    const visitsCookie = cookie.get(cookieName);
    if (visitsCookie?.value === undefined) {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        await Statistics.updateOne({ name: IStatisticsName.monthSiteVisits, date: { year, month } }, { $inc: { count: 1 } }, { upsert: true });
        await Statistics.updateOne({ name: IStatisticsName.siteVisits }, { $inc: { count: 1 } }, { upsert: true });
        cookie.set(cookieName, "");
    }
}