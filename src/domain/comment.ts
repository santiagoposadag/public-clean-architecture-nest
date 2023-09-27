export class CommentModel {
    id?: string;
    postId: string;
    author: string;
    messagge: string;

    constructor(id:string, postId:string, author:string, message:string){
        this.id = id;
        this.postId = postId;
        this.author = author;
        this.messagge = message;
    }
}