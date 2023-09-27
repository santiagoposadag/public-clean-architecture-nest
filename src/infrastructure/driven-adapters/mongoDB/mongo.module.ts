import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PostData, PostSchema } from './schema/Post.schema';
import { MongoConfigModule } from './config/database.module';
import { MongoRepositoryService } from './repository/mongo-repository.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PostData.name, schema: PostSchema }
    ]),

    MongoConfigModule,
  ],
  controllers: [],
  exports: [
    MongoRepositoryService
  ],
  providers: [
    MongoRepositoryService
  ],
})
export class MongoDBModule { }
