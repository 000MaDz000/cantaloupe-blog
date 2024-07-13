import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
import UserHandler from "../../../_classes/user";

export type ResponseData = {
    name: string;
    givin_name: string;
    email: string;
    picture: string;
    email_verified: boolean;
}

export async function POST(req: Request) {
    const body: { credential: string } = await req.json();
    const data = jwtDecode<ResponseData>(body.credential);

    const handler = new UserHandler(data);
    const success = await handler.insertIfNotFound();
    await handler.saveSession();

    const res = new NextResponse("", {
        status: success ? 200 : 500,
    });


    return res;
}