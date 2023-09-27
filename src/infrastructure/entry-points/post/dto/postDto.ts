import { CommentDto } from "./commentDto";

export class PostDto{
    _id?: string;
    author: string;
    title: string;
    messagge: string;
    comments?: Array<CommentDto>;
}