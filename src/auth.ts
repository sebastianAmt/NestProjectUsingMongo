import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtdt } from "./login/jwt.dt";
import { UserEntity } from "./login/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from "@nestjs/mongoose";
import { userlogin } from "./userlogin/userloginschema.schema";
import { Model } from "mongoose";


@Injectable()
export class jwdStrategy extends PassportStrategy(Strategy) {
    constructor(private JwtService:JwtService,@InjectModel(userlogin.name) private usserloginmodel: Model<userlogin>,) {
        super({
            secretOrKey: 'abc12234',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    }

    // @InjectRepository(UserEntity)
    // private readonly userRepository: Repository<UserEntity>


   

    async validate(payload: jwtdt): Promise<any> {
        const { username } = payload

        console.log(username,"dieuhfduieh");
        
      const finduser=await this.usserloginmodel.findOne({"username":username}).exec()

      
        console.log(finduser, "finduser");
        if (!finduser) {
            throw new UnauthorizedException('this use is not valid')
        }
        
        return finduser
    }

    async createToken(payload):Promise<any>{
        return await this.JwtService.sign(payload)
    }

}