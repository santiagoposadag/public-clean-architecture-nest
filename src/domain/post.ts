import { CommentModel } from "./comment";
import { WrongTitleExcpetion } from "./domainExceptions/custom.domain.exceptions";

export class PostModel {
    _id?: string;
    author: string;
    title: string;
    messagge: string;
    comments?: Array<CommentModel>;

    constructor(id:string, title:string, author:string, message:string){
        if(title.length < 8){
            throw new WrongTitleExcpetion("The length of the title is below what is requested")
        }
        this._id = id;
        this.title = title;
        this.author = author;
        this.messagge = message;
        this.comments = new Array();
    }

    addComment(postId:string, author:string, message:string):PostModel
    {
        const newComment:CommentModel = new CommentModel(null, postId, author, message);
        this.comments.push(newComment);
        return this;
    }

}

