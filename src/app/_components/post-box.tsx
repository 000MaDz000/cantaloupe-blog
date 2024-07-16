import { IPost, IPostSection } from "@/models/post";
import { Box, Typography } from "@mui/material";
import PostSection from "./post-section";

export default function PostBox({ post }: { post: IPost }) {
    return (
        <Box className="p-7 bg-gray-300 dark:bg-gray-800 dark:text-gray-300 rounded-sm flex flex-col gap-5">
            <Typography variant="h6">{post.classification}</Typography>
            <PostSection demo data={post.sections[0]} />
        </Box>
    )
}