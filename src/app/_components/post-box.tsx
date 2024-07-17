'use client';
import { IPost } from "@/models/post";
import { Box, Typography } from "@mui/material";
import PostSection from "./post-section";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export default function PostBox({ post }: { post: IPost }) {
    const router = useRouter();
    const renderPostPage = () => {
        router.push("/" + post.classification + "/" + ((post as any)._id));
    }
    const section = useMemo(() => {
        const index = post.sections.findIndex(val => Boolean(val.media));
        return post.sections[index] || post.sections[0];
    }, [post]);

    return (
        <Box className="p-7 bg-gray-300 dark:bg-gray-800 dark:text-gray-300 rounded-sm flex flex-col gap-5">
            <Typography variant="h6">{post.classification}</Typography>
            <PostSection demo data={section} onClick={() => renderPostPage()} />
        </Box>
    )
}