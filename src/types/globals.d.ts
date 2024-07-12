import { PostModelType } from "@/models/post";
import { UserModelType } from "@/models/user";
import { UserStatisticsModelType } from "@/models/user-statistics";

declare global {
    var models: {
        user: UserModelType;
        userVisits: PostModelType;
        userStatistics: UserStatisticsModelType;
        post: PostModelType;
    },
}

export default global

