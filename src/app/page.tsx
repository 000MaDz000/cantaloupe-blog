import { getTranslations } from "next-intl/server";
import "../models"
import { Container } from "@mui/material";
import { IPost } from "@/models/post";
import PostsBoxesGrid from "./_components/posts-boxes-grid";
import PageBox from "./_components/page-box";
import getURL from "@/functions/get-url";

export default async function Home() {
  const t = await getTranslations("Index");
  const res = await fetch(getURL("api/posts"));
  const posts = await res.json() as IPost[];

  return (
    <PageBox withHeader>
      <Container>
        <PostsBoxesGrid posts={posts} />
      </Container>

    </PageBox>
  );
}
