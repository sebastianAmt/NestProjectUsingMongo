import { IsNotEmpty, IsString } from "class-validator";

export class LoginCredentialsdto{
   
    @IsString()
    @IsNotEmpty() 
    username:string;

    @IsString()
    @IsNotEmpty() 
    password:String
}