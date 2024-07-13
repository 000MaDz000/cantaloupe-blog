import session from "@/functions/session";
import { Post } from "@/models";
import { NextRequest, NextResponse } from "next/server";

export type ProductsGetQeury = {
    lastId?: string;
}

export async function GET(req: NextRequest, ctx: any) {
    const query = new URL(req.url).searchParams;
    const lastId = query.get("lastId");

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

    const posts = await Post.find(dbQuery).limit(20);
    const resText = JSON.stringify(posts);
    const res = new NextResponse(resText, { status: 200 });
    return res;
}

export async function POST(req: Request) {
    const sess = await session();
    if (!sess.data.user) {
        const res = new NextResponse("", { status: 403 });
        return res;
    }

}

export async function PUT(req: Request) {

}