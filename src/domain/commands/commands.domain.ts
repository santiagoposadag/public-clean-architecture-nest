export class CreatePostCommand{
    author: string;
    title: string;
    messagge: string;
    
    constructor(author:string, title:string, message:string){
        this.author = author;
        this.title = title;
        this.messagge = message;
    }
}


export class CreateCommentCommand{
    postId: string;
    author: string;
    messagge: string;

    constructor(postId:string, author:string, message:string){
        this.postId = postId;
        this.author = author;
        this.messagge = message;
    }
}