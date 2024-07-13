'use client';
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ReactNode } from "react";
import ThemeSwitcher from "./theme-switcher";

export default function DashboardSideBar({ logo }: { logo: ReactNode }) {
    const t = useTranslations("Dashboard.links");
    const locale = useLocale();
    const path = usePathname();

    return (
        <div className="flex-2 bg-gray-700 text-white dark:bg-zinc-900 px-4 py-3 min-w-40 hidden md:flex flex-col gap-10">
            {logo}
            <div className="flex flex-col gap-4 font-open_sans text-lg text-gray-200 font-[300] [&>*]:flex [&>*]:justify-between">
                <Link href="/dashboard" className={"/dashboard" === path ? "bg-slate-600 dark:bg-slate-700 px-2" : "px-2"}>
                    <span>{t("home")}</span>
                    <span>
                        {
                            locale === "ar" ? <ArrowLeft /> : <ArrowRight />
                        }
                    </span>
                </Link>

                <Link href="/dashboard/posts" className={"/dashboard/posts" === path ? "bg-slate-600 dark:bg-slate-700 px-2" : "px-2"}>
                    <span>{t("posts")}</span>
                    <span>
                        {
                            locale === "ar" ? <ArrowLeft /> : <ArrowRight />
                        }
                    </span>
                </Link>

                <Link href="/dashboard/users" className={"/dashboard/users" === path ? "bg-slate-600 dark:bg-slate-700 px-2" : "px-2"}>
                    <span>{t("users")}</span>
                    {
                        locale === "ar" ? <ArrowLeft /> : <ArrowRight />

                    }
                </Link>
            </div>
            <ThemeSwitcher />
        </div>

    )
}