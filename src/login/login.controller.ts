import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
// import { UserEntity } from './user.entity';
// import { usercredentials } from './usercredentials.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

@Controller('login')
export class LoginController {

    constructor(private loginservice:LoginService){}

    @Post('sighup')
    createCredentials(@Body() credentials):Promise<any>{
        console.log(credentials,"credentials");
        return this.loginservice.createCredentials(credentials)
   }

//    @Post('sighin')
//     login(@Body() credentials:usercredentials):Promise<usercredentials>{
//         console.log(credentials,"credentials");
//         return this.loginservice.login(credentials)
//    }

   
}
