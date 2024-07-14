import session from "@/functions/session";
import { Post } from "@/models";
import { IPost, IPostSection } from "@/models/post";
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
    const sess = await session();
    if (!sess.data.user) new NextResponse("", { status: 401 });

    const data: IPost = await req.json();

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

    try {
        await model.validate();
        model.save();
    }
    catch (err) {
        return new NextResponse("", { status: 400 });
    }

    return new NextResponse("", { status: 200 });
}