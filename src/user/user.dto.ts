import { Type } from "class-transformer";
import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";

export class userdto{
   @IsNotEmpty()
    name:string
    
    @IsNumber()
    phone:number

    @IsArray()
    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => addressdto) 
    address: addressdto[];

}
export class addressdto{
   @IsNotEmpty()
   @IsString()
    city:string
    
    @IsNotEmpty()
    @IsNumber()
   pincode:number
}