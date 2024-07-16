import { IPost } from "@/models/post";
import { Grid } from "@mui/material";
import PostBox from "./post-box";

export default function PostsBoxesGrid({ posts }: { posts: IPost[] }) {
    return (
        <Grid className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
            {posts.map(post => <PostBox post={post} key={post.sections[0].body} />)}
        </Grid>
    )
}