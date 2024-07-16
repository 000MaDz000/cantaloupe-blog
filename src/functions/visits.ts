import { Statistics } from "@/models";
import { IStatisticsName } from "@/models/statistics";
import { cookies } from "next/headers";
import session from "./session";
import UserHandler from "@/app/_classes/user";
import { IPost } from "@/models/post";

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

export async function UserVisitsCounter(post: IPost) {
    const sess = await session();
    if (!sess.data.user) return console.log("not logged");
    const user = new UserHandler(sess.data.user);
    await user.visit(post);
}