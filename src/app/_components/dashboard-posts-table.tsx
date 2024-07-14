'use client';
import { IPost } from "@/models/post";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import DashboardPostsTableRow from "./dashboard-posts-table-row";

export default function DashboardPostsTable({ draft }: { draft?: boolean }) {
    const t = useTranslations("Dashboard.tables.posts");
    const [posts, setPosts] = useState<(IPost & { _id: string })[]>([]);
    const [pending, setPending] = useState(false);

    useEffect(() => {
        const lastId = posts.length ? posts[posts.length - 1]._id : "";
        (async () => {
            const res = await axios.get("/api/posts?lastId=" + lastId + (draft ? "&draft=true" : ""));
            setPosts([...posts, ...res.data]);
        })();
    }, []);

    return (
        <>
            <Table className="border dark:border-zinc-900">
                <TableHead>
                    <TableRow>
                        <TableCell className="dark:text-white">{t("classification")}</TableCell>
                        <TableCell className="dark:text-white">{t("title")}</TableCell>
                        <TableCell className="dark:text-white">{t("sections count")}</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {posts.map(v => (
                        <DashboardPostsTableRow post={v} key={v._id as string} />
                    ))}
                </TableBody>

            </Table>
            {
                (!posts.length && !pending) && (
                    <Typography textAlign={"center"} margin={2} fontWeight={"semi-bold"} >{draft ? t("no draft data") : t("no data")}</Typography>
                )
            }

        </>
    )
}