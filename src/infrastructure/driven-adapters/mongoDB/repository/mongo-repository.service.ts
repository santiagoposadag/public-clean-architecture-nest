import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';

import { PostModel, CommentModel } from 'src/domain';
import { IRepository } from 'src/application';

import { PostData, PostDocument } from '../schema/Post.schema';

@Injectable()
export class MongoRepositoryService implements IRepository {

    constructor(
        @InjectModel(PostData.name) private postModel: Model<PostDocument>
    ) { }

    async createPost(post: PostModel): Promise<PostModel> {

        const { comments = [] } = post
        return await this.postModel.create(post)
            .then((post: PostDocument) => {
                const newPost = new PostModel(post.id, post.title, post.author, post.messagge)
                newPost.comments = post.comments
                return newPost
            })
    }
    
    async updatePost(post: PostModel): Promise<PostModel> {
        return await this.postModel.updateOne(post)
        .then((result: UpdateWriteOpResult) => {
            console.log(result);
            return post;
        });
    }

    async findById(postId: string): Promise<PostModel> {
        return await this.postModel.findById(postId);
    }


}
