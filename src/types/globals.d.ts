import { PostModelType } from "@/models/post";
import { UserModelType } from "@/models/user";
import { UserStatisticsModelType } from "@/models/user-statistics";
import { UserVisitsModelType } from "@/models/user-visits";

declare global {
    var models: {
        user: UserModelType;
        userVisits: UserVisitsModelType;
        userStatistics: UserStatisticsModelType;
        post: PostModelType;
    },
}

export default global

