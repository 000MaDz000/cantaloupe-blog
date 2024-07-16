import visitsCounter from "@/functions/visits";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    await visitsCounter();
    const res = new NextResponse("", { status: 200 });;

    return res;
}