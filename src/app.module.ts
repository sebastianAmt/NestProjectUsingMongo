import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserEntity } from './login/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UserloginModule } from './userlogin/userlogin.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/todolist'),LoginModule, UserloginModule,
  // TypeOrmModule.forRoot({
  //   type: 'postgres',
  //     host: 'localhost',
  //     port: 5432,
  //     username: 'root',
  //     password: 'root',
  //     database: 'test_db',
  //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
  //     synchronize: true,
  // }),TypeOrmModule.forFeature([UserEntity]),
    
  ],
    
  
  controllers: [AppController],
  providers: [AppService,],

})
export class AppModule {}
