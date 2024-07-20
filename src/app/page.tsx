import { getTranslations } from "next-intl/server";
import "../models"
import { Container, Typography } from "@mui/material";
import { IPost } from "@/models/post";
import PostsBoxesGrid from "./_components/posts-boxes-grid";
import PageBox from "./_components/page-box";
import getURL from "@/functions/get-url";

export default async function Home() {
  const t = await getTranslations("Index");
  const res = await fetch(getURL("api/posts"));
  const posts = await res.json() as IPost[];

  return (
    <PageBox withHeader withFooter>
      <Container maxWidth="sm">
        {posts && posts.length ? (
          <PostsBoxesGrid posts={posts} />

        ) : (
          <Typography variant="h5" textAlign={"center"} m={3}>{t("no posts")}</Typography>
        )}
      </Container>

    </PageBox>
  );
}
