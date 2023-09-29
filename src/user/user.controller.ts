import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Userservice } from "./user.service";
import { userdto } from "./user.dto";



@Controller()
export class userController {
    constructor(private readonly userservice:Userservice){}

    @Post('details')
    async user_Address(@Body() data:userdto){
        return this.userservice.user_Address(data)
    }

    @Get('getdetail/:id') 
    async getdetail(@Param('id') id:string){
        console.log(id,"hsh.user");
        
        return this.userservice.getdetail(id)
    }
    @Get('find')
    async findall(@Body() data:any){
         return this.userservice.findAll(data.page,data.perPage)
    }
}

