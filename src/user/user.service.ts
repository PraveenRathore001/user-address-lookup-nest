import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { userdetail } from "./user.schema";
import { addresdetail } from "./address.schema";
import { userdto } from "./user.dto";



@Injectable()
export class Userservice{
    constructor(@InjectModel("User") private readonly usermodel:Model<userdetail>,
    @InjectModel("Address") private readonly addresmodel:Model<addresdetail> ){}

    async user_Address(data:userdto){
        try {
        
            const dataa=await this.usermodel.create(data);
            console.log(typeof(dataa._id),"fsfs");
            
            await this.addresmodel.create({...data,userid:dataa.id});
            return "suceess"
        } catch (error) {
            console.log(error);
            
        }
        }
    async getdetail(id){
        let ID = new Types.ObjectId(id);
     const ss= await this.usermodel.aggregate([{$match:{_id:ID}},
        {
            $project : {__v:0

            }
        },
        {
            $lookup:{
            from:"addresses",
            localField:"_id",
            foreignField:"userid",
            as:"alldetails",
            pipeline:[{$project:{__v:0,userid:0}}]
        }},
      ])
      console.log(ss);
      
      return ss 
    }
        async findAll(page: number , perPage: number ){
            const skip = (page - 1) * perPage;
            return await this.usermodel.find().skip(skip).limit(perPage)
        //  return await this.usermodel.countDocuments()
          }
    


} 