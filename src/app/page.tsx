import { getTranslations } from "next-intl/server";
import "../models"
import Header from "./_components/header";
import { Box } from "@mui/material";

export default async function Home() {
  const t = await getTranslations("Index");

  return (
    <div className="flex flex-col gap-1 min-h-screen ">
      <Header />

      <Box className="grow flex bg-slate-100">

      </Box>
    </div>
  );
}
