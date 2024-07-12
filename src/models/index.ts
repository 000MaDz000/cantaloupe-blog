
import PostModel, { PostModelType } from "./post";
import UserModel, { UserModelType } from "./user";
import UserStatisticsModel, { UserStatisticsModelType } from "./user-statistics";
import UserVisitsModel, { UserVisitsModelType } from "./user-visits";



export const User = UserModel as UserModelType;
export const UserVisits = UserVisitsModel as UserVisitsModelType;
export const UserStatistics = UserStatisticsModel as UserStatisticsModelType;
export const Post = PostModel as PostModelType;

console.log("user", User);
console.log("user visits", UserVisits);
console.log("user statistics", UserStatisticsModel);
console.log("post", PostModel);
