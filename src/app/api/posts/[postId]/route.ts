import isAdmin from "@/functions/is-admin";
import session from "@/functions/session";
import ValidateId from "@/functions/validate-id";
import { Post } from "@/models/index";
import { IPost, IPostSection } from "@/models/post";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { postId: string } }) {
    if (!await isAdmin()) return new NextResponse("", { status: 403 });
    if (!ValidateId(params.postId)) return new NextResponse("", { status: 404 });

    const sess = await session();
    if (!sess.data.user) new NextResponse("", { status: 403 });

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


    try {
        const dbResult = await Post.updateOne({ _id: params.postId }, { $set: willInsert });
        if (!dbResult.modifiedCount) return new NextResponse("", { status: 404 });
    }
    catch (err) {
        return new NextResponse("", { status: 400 });
    }

    return new NextResponse("", { status: 200 });
}