import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { loginRepository } from './login.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwdStrategy } from 'src/auth';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema, userdata } from './user.schema';

@Module({
  imports: [


  //   TypeOrmModule.forFeature([UserEntity]), PassportModule.register({
  //   defaultStrategy: 'jwt'
  // }),
    
  MongooseModule.forFeature([{ name: userdata.name, schema: userSchema, },],
    // PassportModule.register({ defaultStrategy: 'jwt',
    // secret: 'abc12234',
    // signOptions: {
    //   expiresIn: 3600
    // } })
    )
  //   secret: 'abc12234',
  //   signOptions: {
  //     expiresIn: 3600
  //   }
  // })
],
  controllers: [LoginController],
  providers: [LoginService, loginRepository,
    // jwdStrategy
  ],
  exports:[
    
  ]
})
export class LoginModule { }
