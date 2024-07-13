import { getTranslations } from "next-intl/server";
import "../models"
import GoogleLoginButton from "./_components/google-login";

export default async function Home() {
  const t = await getTranslations("Index");

  return (
    <div>
      <GoogleLoginButton />
    </div>
  );
}
