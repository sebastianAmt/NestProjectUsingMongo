import { Module } from '@nestjs/common';
import { UserloginController } from './userlogin.controller';
import { UserloginserviceService } from './userloginservice.service';
import { Userloginrepo } from './userloginrepo.repo';
import { MongooseModule } from '@nestjs/mongoose';
import { userlogin, userloginSchema } from './userloginschema.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwdStrategy } from 'src/auth';
import { userAddressSchema, useraddress } from 'src/schemas/useradedress.schema';
import { userdatas, userdatasSchema } from 'src/schemas/userdatas.schema';

@Module({
    imports:[MongooseModule.forFeature([{name:userlogin.name,schema:userloginSchema},
      {name:useraddress.name,schema:userAddressSchema},{name:userdatas.name,schema:userdatasSchema}],
      ),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register( {secret: 'abc12234',
      signOptions: {
        expiresIn: 3600
      }})
    ],
  controllers: [UserloginController],
  providers:[UserloginserviceService,Userloginrepo,useraddress,
    jwdStrategy
]
})
export class UserloginModule {}
