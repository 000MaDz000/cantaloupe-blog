import { Model, model, Schema } from "mongoose";

export enum IStatisticsName {
    totalPosts = "totalPosts", // total posts created from the site creation
    monthPosts = "monthPosts", // total posts created in the site this month
    draftPosts = "draftPosts", // total draft posts created in site in month
    totalUsers = "totalUsers", // total users joined from the site creation
    adminUsers = "AdminUsers", // total users that has admin role
    siteVisits = "siteVisits", // total site visits in some month,
    monthSiteVisits = "monthSiteVisits",
};

export interface IStatistics {
    name: IStatisticsName;
    date?: { year: number, month: number },
    count: number;
}

export type StatisticsModelType = Model<IStatistics>;

let StatisticsSchema = null;
let StatisticsModel = null;

if (global.models.statistics) {
    StatisticsModel = global.models.statistics;
}
else {
    console.log("creating statistics model ..");

    StatisticsSchema = new Schema<IStatistics>({
        "name": String,
        count: Number,
        date: {
            year: Number,
            month: Number,
        }
    });

    StatisticsSchema.index({ "name": 1 });

    StatisticsModel = model("Statistics", StatisticsSchema);
    global.models.statistics = StatisticsModel;

}


export default StatisticsModel as StatisticsModelType;