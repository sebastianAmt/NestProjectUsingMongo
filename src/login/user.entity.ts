import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity{
    
    @PrimaryGeneratedColumn('uuid')
    id:UUID

    @Column()
    username:string

    @Column()
    password:string
}