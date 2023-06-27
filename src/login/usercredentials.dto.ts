import { IsString,IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";

export class usercredentials{
    
    @IsString()
    @IsNotEmpty()
    username:string;

    @IsString()
    @IsNotEmpty() 
    password:string
}