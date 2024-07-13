import isAdmin from "@/functions/is-admin";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import DashboardSideBar from "../_components/dashboard-sidebar";
import { getLocale } from "next-intl/server";
import AppLogo from "../_components/app-logo";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    const admin = await isAdmin();
    const locale = await getLocale();
    if (!admin) redirect("/");

    return (
        <div className="min-h-screen w-full flex dark:bg-zinc-800">
            <DashboardSideBar logo={<AppLogo />} />
            <div className="flex-1">
                {children}
            </div>
        </div>

    )
}