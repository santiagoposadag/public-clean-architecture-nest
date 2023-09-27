import { PostModel, CommentModel } from "src/domain";

export interface IRepository {
    createPost(post: PostModel): Promise<PostModel>;
    updatePost(post:PostModel): Promise<PostModel>;
    findById(postId:string): Promise<PostModel>;
}