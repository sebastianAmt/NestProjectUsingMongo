import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type userDocument = HydratedDocument<userdata>;

@Schema()
export class userdata{
    @Prop()
    name:String

    @Prop()
    age:Number
}

export const userSchema=SchemaFactory.createForClass(userdata)