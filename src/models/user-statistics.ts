import { Model, model, Schema } from "mongoose";
if (!global.models) global.models = {} as any;

export interface IUserStatistics {
    userId: Schema.Types.ObjectId;
    classification: string;
    visitCount: number;
}
export type UserStatisticsModelType = Model<IUserStatistics>;

let UserStatisticsSchema = null;
let UserStatisticsModel = null;

if (global.models.userStatistics) {
    UserStatisticsModel = global.models.userStatistics;
}
else {
    console.log("creating User Statistics Model ..");

    UserStatisticsSchema = new Schema<IUserStatistics>({
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        classification: {
            type: String,
            required: true,
        },
        visitCount: {
            type: Number,
            default: 1,
        }
    });

    UserStatisticsSchema.index({ "userId": 1, visitCount: -1 });
    UserStatisticsModel = model("UserStatistics", UserStatisticsSchema);
    global.models.userStatistics = UserStatisticsModel;

}

export default UserStatisticsModel as UserStatisticsModelType;