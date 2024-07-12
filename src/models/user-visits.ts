import { Model, Schema, model } from "mongoose";

export interface IUserVisits {
    userId: Schema.Types.ObjectId;
    postId: Schema.Types.ObjectId;
    postClassification: string;
    date: Date;
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
        }
    });

    UserVisitsModel = model("UserVisits", userVisitsSchema);
    global.models.userVisits = UserVisitsModel;
}

export default UserVisitsModel as UserVisitsModelType;

