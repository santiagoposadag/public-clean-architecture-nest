import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema({ collection: 'posts', versionKey: false, timestamps: true })
export class PostData {
    @Prop({
        type: String,
    })
    author: string;

    @Prop({
        type: String,
    })
    title: string;

    @Prop({
        type: String,
    })
    messagge: string;
    
    @Prop()
    comments: Array<CommentData>;  
}

interface CommentData {
    id: string;
    postId: string;
    author: string;
    messagge: string;
}

export type PostDocument = HydratedDocument<PostData>

export const PostSchema = SchemaFactory.createForClass(PostData);