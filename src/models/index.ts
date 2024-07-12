
import mongoose from "mongoose";
import PostModel, { PostModelType } from "./post";
import UserModel, { UserModelType } from "./user";
import UserStatisticsModel, { UserStatisticsModelType } from "./user-statistics";
import UserVisitsModel, { UserVisitsModelType } from "./user-visits";



export const User = UserModel as UserModelType;
export const UserVisits = UserVisitsModel as UserVisitsModelType;
export const UserStatistics = UserStatisticsModel as UserStatisticsModelType;
export const Post = PostModel as PostModelType;


if (!global.databaseConnected) {
    console.log("trying to connect to database");
    (async () => {
        await mongoose.connect(process.env.MONGO_URL as string).then(() => {
            console.log("database connected successfully");
            global.databaseConnected = true;
        }).catch(() => {
            console.log("failed to connect to database");
            process.exit(1);
        });

    })()
}