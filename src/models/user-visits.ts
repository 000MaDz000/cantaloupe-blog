import { Model, Schema, model } from "mongoose";
if (!global.models) global.models = {} as any;

export interface IUserVisits {
    userId: Schema.Types.ObjectId;
    postId: Schema.Types.ObjectId;
    postClassification: string;
    date: Date;
    count: number;
}

export type UserVisitsModelType = Model<IUserVisits>;
let userVisitsSchema = null;
let UserVisitsModel = null;

if (global.models.userVisits) {
    UserVisitsModel = global.models.userVisits;
}
else {
    console.log("creating the user visits database model..");
    userVisitsSchema = new Schema<IUserVisits>({
        userId: {
            ref: "User",
            type: Schema.Types.ObjectId,
            required: true,
        },
        postId: {
            ref: "Post",
            required: true,
            type: Schema.Types.ObjectId,
        },
        postClassification: {
            type: String,
            require: true,
        },
        date: {
            type: Date,
            default: Date.now
        },
        count: {
            type: Number,
            default: 1
        }
    });

    userVisitsSchema.index({ userId: 1, date: -1, postClassification: 1, postId: 1 })
    UserVisitsModel = model("UserVisits", userVisitsSchema);
    global.models.userVisits = UserVisitsModel as UserVisitsModelType;
}

export default UserVisitsModel as UserVisitsModelType;

