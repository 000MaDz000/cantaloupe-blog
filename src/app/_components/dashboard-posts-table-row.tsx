'use client';

import { IPost } from "@/models/post";
import { TableCell, TableRow } from "@mui/material";
import { useRouter } from "next/navigation";

export default function DashboardPostsTableRow({ post }: { post: IPost & { _id: string } }) {
    const router = useRouter();

    return (
        <TableRow onClick={() => router.push("/dashboard/posts/" + post._id)} className="cursor-pointer" hover>
            <TableCell className="dark:text-gray-300">{post.classification}</TableCell>
            <TableCell className="dark:text-gray-300">{post.sections[0].title}</TableCell>
            <TableCell className="dark:text-gray-300">{post.sections.length}</TableCell>
        </TableRow>
    )
}