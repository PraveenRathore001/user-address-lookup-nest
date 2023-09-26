import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userschema } from './user.schema';
import { Address, adresschema } from './address.schema';
import { userController } from './user.controller';
import { Userservice } from './user.service';

@Module({
  imports:[MongooseModule.forFeature([{name:User.name ,schema:userschema}]),
  MongooseModule.forFeature([{name:Address.name ,schema:adresschema}])],
  controllers:[userController],
  providers:[Userservice],
})
export class usermodule {}