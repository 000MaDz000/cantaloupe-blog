'use client';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function DashboardPostsTable() {
    const t = useTranslations("Dashboard.tables.posts");
    const [posts, setPosts] = useState([]);
    const [pending, setPending] = useState(false);
    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className="dark:text-white">{t("classification")}</TableCell>
                        <TableCell className="dark:text-white">{t("title")}</TableCell>
                        <TableCell className="dark:text-white">{t("sections count")}</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>

                </TableBody>

            </Table>
            {
                (!posts.length && !pending) && (
                    <Typography textAlign={"center"} margin={2} fontWeight={"semi-bold"} >{t("no data")}</Typography>
                )
            }

        </>
    )
}