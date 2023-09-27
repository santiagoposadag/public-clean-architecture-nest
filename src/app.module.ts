import { Module } from '@nestjs/common';
import { MongoRepositoryService } from './infrastructure/driven-adapters/mongoDB/repository/mongo-repository.service';
import { ConfigModule } from '@nestjs/config';

import { MongoDBModule } from './infrastructure/driven-adapters/mongoDB/mongo.module';
import { CreateCommentUseCase, CreatePostUseCase } from './application';
import { PostController } from './infrastructure/entry-points/post/post.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env`,
      isGlobal: true
    }),


    MongoDBModule,

  ],
  controllers: [PostController],
  providers: [

    {
      provide: CreatePostUseCase,
      useFactory: (framework: MongoRepositoryService) => new CreatePostUseCase(framework),
      inject: [MongoRepositoryService]
    },

    {
      provide: CreateCommentUseCase,
      useFactory: (framework: MongoRepositoryService) => new CreateCommentUseCase(framework),
      inject: [MongoRepositoryService]
    },

  ],
})
export class AppModule { }
