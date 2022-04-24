import { Column, Model } from "sequelize-typescript";
import { BaseTable } from "@midwayjs/sequelize";

@BaseTable({
    freezeTableName: true
})
export class User extends Model{
  @Column({
    comment: 'uid'
  })
  uid: number;

  @Column({
    comment: 'name'
  })
  name: string;

  @Column({
    comment: 'age'
  })
  age: number;

  @Column({
    comment: 'addr'
  })
  addr: string;

  @Column({
    comment: 'salary'
  })
  salary: string;
}