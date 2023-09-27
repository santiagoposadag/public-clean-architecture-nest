import { PostModel, CommentModel } from "./../../domain";
import { IRepository } from "../gateway/IRepository";
import { CreateCommentCommand } from "src/domain/commands/commands.domain";
import { randomUUID } from "crypto";

export class CreateCommentUseCase {

    constructor( 
        private readonly repository: IRepository,
    ){}
    
    async execute(createCommentcommand: CreateCommentCommand): Promise<PostModel> {
        const post:PostModel = await this.repository.findById(createCommentcommand.postId);
        const newPost = post.addComment(
            createCommentcommand.postId,
            createCommentcommand.author,
            createCommentcommand.messagge
        )
        return this.repository.updatePost(newPost);
    }
}