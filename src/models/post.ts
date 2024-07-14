import { model, Model, Schema } from "mongoose";

export type IPostSection = {
    media: string;
    title: string;
    body: string;
};

export interface IPost {
    classification: string;
    sections: IPostSection[],
    draft?: boolean;
}

export type PostModelType = Model<IPost>

let PostSchema = null;
let PostModel = null;

if (global.models.post) {
    PostModel = global.models.post;
}
else {
    console.log("creating post model..");
    PostSchema = new Schema<IPost>({
        classification: {
            type: String,
            required: true,
        },
        draft: {
            type: Boolean,
            default: false,
        },
        sections: {
            type: [{
                media: String,
                title: String,
                body: String,
            }],
        }
    });

    PostSchema.index({ classification: 1 });

    PostModel = model("Post", PostSchema);
    global.models.post = PostModel;
}


export default PostModel as PostModelType;