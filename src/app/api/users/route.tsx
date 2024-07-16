import isAdmin from "@/functions/is-admin";
import ValidateId from "@/functions/validate-id";
import { User } from "@/models";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    if (!await isAdmin()) notFound();
    const params = new URL(req.url).searchParams;
    const lastId = params.get("lastId");
    const role = params.get("role");
    const dbQuery: any = {};
    if (lastId) dbQuery._id = {
        $gt: lastId,
    }

    if (role) dbQuery.role = role === "admin" ? "admin" : "user";

    const data = await User.find(dbQuery).limit(20);
    const response = new NextResponse(JSON.stringify(data), { status: 200 });
    response.headers.set("Content-Type", "application/json");

    return response;
}

export async function PUT(req: Request) {
    if (!(await isAdmin)) notFound();
    const query = new URL(req.url).searchParams;
    const userId = query.get("userId"), targetRole = query.get("targetRole");

    if (!ValidateId(userId)) notFound();
    if (targetRole !== "admin" && targetRole !== "user") notFound;
    await User.updateOne({ _id: userId }, { $set: { role: targetRole } });

    return new NextResponse("", { status: 200 });

}