import isAdmin from "@/functions/is-admin";
import session from "@/functions/session";
import { Post, Statistics } from "@/models";
import { IPost, IPostSection } from "@/models/post";
import { IStatisticsName } from "@/models/statistics";
import { NextRequest, NextResponse } from "next/server";

export type ProductsGetQeury = {
    lastId?: string;
}

export async function GET(req: NextRequest, ctx: any) {
    const query = new URL(req.url).searchParams;
    const lastId = query.get("lastId");
    const draft = query.get("draft");

    if (lastId && lastId.length !== 24) {
        const res = new NextResponse("[]", { status: 404 });
        return res;
    }

    const dbQuery: any = {};
    if (lastId) {
        dbQuery._id = {
            $gt: lastId,
        };
    }

    if (draft === "true") {
        dbQuery.draft = true;
    }

    const posts = await Post.find(dbQuery).limit(20);
    const resText = JSON.stringify(posts);
    const res = new NextResponse(resText, { status: 200 });
    return res;
}

export async function POST(req: Request) {
    if (!await isAdmin()) new NextResponse("", { status: 403 });

    const data = await req.json();

    if (!data.classification) return new NextResponse("", { status: 400 })
    if (!data.sections || !data.sections.length) return new NextResponse("", { status: 400 });

    const collectedSections: IPostSection[] = [];

    for (let section of data.sections) {
        collectedSections.push({
            title: section.title,
            body: section.body,
            media: section.media,
        });
    }

    const willInsert: IPost = {
        classification: data.classification,
        draft: data.draft ? true : false,
        sections: collectedSections
    };

    const model = new Post(willInsert);
    const total = IStatisticsName.totalPosts;
    const monthN = IStatisticsName.monthPosts;
    const draft = IStatisticsName.draftPosts;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    await Statistics.updateOne({ name: total }, { $inc: { count: 1 } }, { upsert: true });
    await Statistics.updateOne({ name: monthN, date: { year, month } }, { $inc: { count: 1 } }, { upsert: true });
    if (data.draft) await Statistics.updateOne({ name: draft }, { $inc: { count: 1 } }, { upsert: true });


    try {
        await model.validate();
        model.save();
    }
    catch (err) {
        return new NextResponse("", { status: 400 });
    }

    return new NextResponse("", { status: 201 });
}