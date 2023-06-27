import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { userlogin, userloginDocument } from './userloginschema.schema';
import { Model } from 'mongoose';
import { LoginCredentialsdto } from './credentialsdto.dt';
import * as bcrypt from 'bcrypt';
import { jwdStrategy } from 'src/auth';
import { useraddress } from 'src/schemas/useradedress.schema';
import { userdatas } from 'src/schemas/userdatas.schema';

@Injectable()
export class Userloginrepo {
    constructor(@InjectModel(userlogin.name) private usserloginmodel: Model<userlogin>,
    @InjectModel(useraddress.name) private usseraddressmodel: Model<useraddress>,
    @InjectModel(userdatas.name) private userdatasmodel: Model<userdatas>,

    
        private jwdStrategy: jwdStrategy
    ) {
    }
    async createcredentials(credentials: LoginCredentialsdto): Promise<string> {
        const { username, password } = credentials
        console.log({ username, password }, "dugduggh");
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const create = await this.usserloginmodel.create({ username, password: hashedPassword })
        try {
            const result = await create.save()
            console.log(result.username, "username");
            const finaltokken = await this.jwdStrategy.createToken({ username: result.username })
            console.log(finaltokken, "finaltokken");
            return finaltokken
        }
        catch (err) {
            console.log(err);
            return 'Not created sucessfully'
        }
    }
    async login(credentials: LoginCredentialsdto,user): Promise<string> {
        const { username, password } = credentials
        if(   await bcrypt.compare(password, user.password)){
         return 'user valid'
        }
       return 'user is not valid'

    }

    async joinTestRepo(): Promise<any> {
        const data= await this.userdatasmodel.aggregate(  [   {
                $lookup:{
                    from:"useraddresses",
                    localField:"_id",
                    foreignField:"userid",
                    as:"joinedData"
                    }}])
        return data

    }
}
