'use server';
import NextSession from "@/app/_classes/next-session";
import { SessionData } from "@/types/globals";

export default async function session(): Promise<NextSession<SessionData>> {
    return new NextSession();
}