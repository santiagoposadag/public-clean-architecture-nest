import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './mongoose.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),

  ], 
  controllers: [],
  providers: [MongooseConfigService],
})
export class MongoConfigModule { }
