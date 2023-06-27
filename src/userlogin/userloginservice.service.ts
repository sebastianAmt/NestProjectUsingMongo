import { Injectable } from '@nestjs/common';
import { LoginCredentialsdto } from './credentialsdto.dt';
import { Userloginrepo } from './userloginrepo.repo';

@Injectable()
export class UserloginserviceService {
   constructor(public Userloginrepo:Userloginrepo){}

    async createcredentials(credentials:LoginCredentialsdto):Promise<any>{
        console.log("comming");
        
        return this.Userloginrepo.createcredentials(credentials)
    }
    async login(credentials:LoginCredentialsdto,user):Promise<any>{
        
        return this.Userloginrepo.login(credentials,user)
    }
    async joinTestService():Promise<any>{
        
        return this.Userloginrepo.joinTestRepo()
    }

}
