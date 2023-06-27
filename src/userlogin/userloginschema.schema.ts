import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class userlogin{

    @Prop({required:true})
    username:String

    @Prop({required:true})
    password:String 

}
export type userloginDocument = HydratedDocument<userlogin>;
export const userloginSchema=SchemaFactory.createForClass(userlogin)