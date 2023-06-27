import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import {userDocument, userSchema, userdata} from './user.schema'
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt'
import { usercredentials } from "./usercredentials.dto";

// import { JwtService } from "@nestjs/jwt";
// import { jwtdt } from "./jwt.dt";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


@Injectable()
export class loginRepository {
    constructor(
    //     @InjectRepository(UserEntity)
    // private readonly userRepository: Repository<UserEntity>,
 
  @InjectModel(userdata.name) private userModel: Model<userdata>
    // private JwtService:JwtService
    ) { }


    async createCredentials(credentials): Promise<any> {
        // const { username, password } = credentials
        // console.log({ username, password }, "{username,password}");

        // const saltOrRounds = 10;
        // const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        // const newcredentiasls = { username: username, password: hashedPassword }       
        // const create = await this.userRepository.create(newcredentiasls)
       
        const create = await new this.userModel(credentials)
       const insertvalue= await create.save()
        return insertvalue
    }

    // async login(credentials): Promise<any> {
    //     const { username, password } = credentials
    //     const findUserName=await this.userRepository.createQueryBuilder('usercredentials').andWhere({username:username})
    //     const userValues=await findUserName.getOne()

    //    if(await bcrypt.compare(password,userValues.password)){
    //     const payload:jwtdt={ username }
    //     const accesstoken= this.JwtService.sign(payload)
    //     console.log(accesstoken,"accesstoken");
    //     return {accesstoken}
    // }
    // else{
    //     throw new UnauthorizedException('You password credentials is invalid')
    // }
        

    //     return 
    // }
}