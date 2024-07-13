'use client';

import { IPost } from "@/models/post";
import { TableCell, TableRow } from "@mui/material";

export default function PostsTableRow(post: IPost) {
    return (
        <TableRow>
            <TableCell>{post.classification}</TableCell>
            <TableCell>{post.sections[0].title}</TableCell>
            <TableCell>{post.sections.length}</TableCell>
        </TableRow>
    )
}