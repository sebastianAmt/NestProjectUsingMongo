import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { UUID } from "crypto"
import { HydratedDocument } from "mongoose"

@Schema()
export class useraddress{

    @Prop()
    door : string

    @Prop()
    streetNo : string

    @Prop()
    district : string

    @Prop()
    State : string

    @Prop()
    userid : UUID
}


export type userAddressDocument = HydratedDocument<useraddress>;
export const userAddressSchema=SchemaFactory.createForClass(useraddress)