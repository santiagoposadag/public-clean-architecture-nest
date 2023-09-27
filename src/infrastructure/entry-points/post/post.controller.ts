import { Body, Controller, Post } from '@nestjs/common';

import { CreatePostUseCase } from '../../../application';
import { CreatePostCommand } from 'src/domain/commands/commands.domain';
import { PostDto } from './dto/postDto';

@Controller('post')
export class PostController {

    constructor(
        private readonly postUseCase: CreatePostUseCase,
    ) { }

    @Post('/create')
    createPost(@Body() createPostCommand: CreatePostCommand): Promise<PostDto> {
        return this.postUseCase.execute(createPostCommand)
    }

}
