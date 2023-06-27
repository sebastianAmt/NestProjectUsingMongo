import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose";

@Schema()
export class salarydetails{
    @Prop()
    salary:string

    @Prop()
    user_id:string
}


export type salarydetailsDocument = HydratedDocument<salarydetails>;
export const salarydetailsSchema=SchemaFactory.createForClass(salarydetails)

