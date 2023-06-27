import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { LoginCredentialsdto } from './credentialsdto.dt';
import { UserloginserviceService } from './userloginservice.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('userlogin')
export class UserloginController {

    constructor(private userLoginservice:UserloginserviceService){}


@Post('createCredentials')
async createcredentiaals(@Body() creadentials:LoginCredentialsdto):Promise<String>{
    return  this.userLoginservice.createcredentials(creadentials)
}

@Post('login')
@UseGuards(AuthGuard())
async login(@Body()creadentials:LoginCredentialsdto,@Req() user):Promise<any>{
    console.log(user.user,"user from authguard");
    
    return this.userLoginservice.login(creadentials,user.user)
}


@Post('joinroute')
@UseGuards(AuthGuard())
async joinroute(@Req() user):Promise<any>{
    console.log(user.user,"user from authguard");
    
    return this.userLoginservice.joinTestService()
}
    
}
