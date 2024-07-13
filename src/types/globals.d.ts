import { PostModelType } from "@/models/post";
import { UserModelType } from "@/models/user";
import { UserStatisticsModelType } from "@/models/user-statistics";
import { UserVisitsModelType } from "@/models/user-visits";
import { ResponseData } from "@/app/api/auth/google/route";
import { StatisticsModelType } from "@/models/statistics";

declare global {
    var models: {
        user: UserModelType;
        userVisits: UserVisitsModelType;
        userStatistics: UserStatisticsModelType;
        post: PostModelType;
        statistics: StatisticsModelType;
    },

    var databaseConnected: boolean;
}

export default global

export interface SessionData {
    user: ResponseData
} 