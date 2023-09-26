import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, SchemaTypes, Types } from "mongoose";
import { User } from "./user.schema";



export type addresdetail=HydratedDocument<Address>
@Schema()
export class Address{
    @Prop()
    address:[{city:string,pincode:number}]
// @Prop()
// city:string
// @Prop()
// pincode:number
@Prop({ type: SchemaTypes.ObjectId, ref: User.name })
userid:Types.ObjectId

}
export const adresschema=SchemaFactory.createForClass(Address)