import session from "./session";

export default async function isAdmin() {
    const sess = await session();
    return sess.data.user?.email === process.env.ADMIN_EMAIL;
}