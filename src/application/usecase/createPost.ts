import { PostModel } from "src/domain/post";
import { IRepository } from "../gateway/IRepository";
import { CreatePostCommand } from "src/domain/commands/commands.domain";

export class CreatePostUseCase {

    constructor(
        private readonly repository: IRepository,
    ) { }

    execute(createPostCommand: CreatePostCommand): Promise<PostModel> {
        const newPost:PostModel = new PostModel(
            null,
            createPostCommand.title, 
            createPostCommand.author, 
            createPostCommand.messagge
            );
        return this.repository.createPost(newPost);
    }
}