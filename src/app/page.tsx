import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Index");

  return (
    <div>
      {t("x")}
    </div>
  );
}
