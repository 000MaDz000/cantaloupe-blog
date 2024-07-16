import { getTranslations } from "next-intl/server";
import "../models"
import Header from "./_components/header";
import { Box, Container } from "@mui/material";
import { IPost } from "@/models/post";
import PostBox from "./_components/post-box";
import PostsBoxesGrid from "./_components/posts-boxes-grid";

export default async function Home() {
  const t = await getTranslations("Index");
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json() as IPost[];

  return (
    <div className="flex flex-col gap-1 min-h-screen dark:bg-zinc-600">
      <Header />

      <Box className="grow bg-slate-100 dark:bg-inherit">
        <Container>
          <PostsBoxesGrid posts={posts} />
        </Container>
      </Box>
    </div>
  );
}
