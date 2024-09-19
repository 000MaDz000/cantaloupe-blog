'use client';
import { IPost } from "@/models/post";
import { useScrollTrigger } from "@mui/material";
import PostBox from "./post-box";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function PostsBoxesGrid(props: { posts: IPost[] }) {
    const [posts, setPosts] = useState(props.posts);
    const lastId = useMemo(() => (posts[posts.length - 1] as any)._id, [posts]);
    const pending = useScrollTrigger();

    useEffect(() => {
        if (pending) {
            axios.get("/api/posts?lastId=" + lastId).then(({ data }) => {
                if (data && Array.isArray(data)) {
                    setPosts([...posts, ...data]);
                }
                console.log(data);

            });
        }
    }, [pending]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {posts.map((post, i) => <PostBox post={post} key={post.sections[0].body + post.sections[0].title + i} />)}
        </div>
    )
}