import { Injectable } from '@nestjs/common';
import { loginRepository } from './login.repository';
import { usercredentials } from './usercredentials.dto';

@Injectable()
export class LoginService {

    constructor(private loginRepo:loginRepository){}
    async createCredentials(credentials):Promise<any>{
        console.log(credentials,"log creditans from service");
        return await this.loginRepo.createCredentials(credentials)
    }

    // async login(credentials:usercredentials):Promise<usercredentials>{
    //     console.log(credentials,"log creditans from service");
    //     return await this.loginRepo.login(credentials)
    // }
}
