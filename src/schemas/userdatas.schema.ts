import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { UUID } from "crypto"
import { HydratedDocument } from "mongoose"

@Schema()
export class userdatas{
@Prop()
name:String

@Prop()
age:Number

@Prop({ type: Object })
personalDetails :Record<string, any>;
}


export type userdatasDocument = HydratedDocument<userdatas>;
export const userdatasSchema=SchemaFactory.createForClass(userdatas)