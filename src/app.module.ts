import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { usermodule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0:27017/useraddress'),usermodule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
