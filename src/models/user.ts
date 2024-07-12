import { Model, Schema, model } from "mongoose";

export type UserRole = "admin" | "user";

export interface IUser {
    name: string;
    email: string;
    role: UserRole,
}

export type UserModelType = Model<IUser>;
let userModelSchema = null;
let UserModel = null;

if (global.models.user) {
    UserModel = global.models.user;
}
else {
    console.log("creating the user database model..");

    userModelSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        }
    });

    userModelSchema.index({ email: 1, });
    userModelSchema.index({ role: 1 });

    UserModel = model("User", userModelSchema);
    global.models.user = UserModel as UserModelType;
}

export default UserModel as UserModelType;

