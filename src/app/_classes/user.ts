import { ResponseData } from "../api/auth/google/route";
import { User, UserVisits } from "../../models";
import session from "../../functions/session";
import { IPost } from "@/models/post";

export default class UserHandler {
    constructor(public data: ResponseData) { }

    async insertIfNotFound() {
        try {
            const user = await User.findOne({ email: this.data.email });

            if (user) return true;

            const newUser = new User({
                name: this.data.name,
                email: this.data.email,
                role: "user",
            });

            await newUser.save();
            return true;
        }
        catch (err) {
            return false;
        }
    }

    async saveSession() {
        try {
            const sess = await session();
            sess.data.user = this.data;
            sess.save().then(() => console.log(true));
            console.log(sess);

            return true;
        }
        catch (err) {
            return false;
        }
    }

    async visit(post: IPost) {
        const user = await User.findOne({ email: this.data.email });
        if (!user) return;

        await UserVisits.updateOne(
            {
                "postId": post,
                postClassification: post.classification,
                userId: user._id,
            },
            { $inc: { "count": 1 } },
            { upsert: true });
    }

    static async getUser() {
        try {
            const sess = await session();
            if (sess.data.user) {
                return new User(sess.data.user);
            }
            else {
                return null;
            }
        }
        catch (err) {
            return null;
        }
    }

}