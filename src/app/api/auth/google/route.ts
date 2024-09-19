import { NextResponse } from "next/server";
import UserHandler from "../../../_classes/user";
import axios from "axios";
import session from "@/functions/session";

export type ResponseData = {
    name: string;
    givin_name: string;
    email: string;
    picture: string;
    email_verified: boolean;
}

export async function POST(req: Request) {
    const body: { access_token: string } = await req.json();
    const googleRes = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
            Authorization: `Bearer ${body.access_token}`
        }
    });

    const data: ResponseData = googleRes.data;
    const handler = new UserHandler(data);
    const success = await handler.insertIfNotFound();
    await handler.saveSession();



    const res = new NextResponse("", {
        status: success ? 200 : 500,
    });

    if (data.email === process.env.ADMIN_EMAIL) {
        res.headers.set("x-redirect", "/dashboard");
    }

    return res;
}

export async function PATCH() {
    const sess = await session();
    sess.data.user = undefined;
    await sess.save();
    const response = new NextResponse("", { status: 200 });
    return response;
}