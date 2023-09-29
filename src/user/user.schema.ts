import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";



export type userdetail=HydratedDocument<User>
@Schema({timestamps:true})
export class User{
@Prop()
name:string
@Prop()
email:string
@Prop()
phone:number

}
export const userschema=SchemaFactory.createForClass(User)