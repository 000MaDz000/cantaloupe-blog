'use client';
import DeletePostButton from "@/app/_components/delete-post";
import PostEditor from "@/app/_components/post-editor";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { notFound } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { IPost } from "@/models/post";

export default function DashboardPostEdit({ params }: { params: { id: string } }) {
    const [post, setPost] = useState<IPost | null>(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        axios.get("/api/posts/" + params.id).then(data => {
            setPost(data.data as IPost);
            setPending(false);
        }).catch(err => {
            setPending(false);
        });
    }, []);

    if (!post && !pending) {
        notFound();
    }

    return (
        post &&
        <div className="flex flex-col gap-7 mt-7">
            <Container>

                <Box>
                    <DeletePostButton postId={params.id} />
                </Box>

            </Container>
            <Container maxWidth="md">
                <PostEditor post={post} />
            </Container>

        </div>
    )
}