import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { IsString, IsNumber } from 'class-validator';

@Table({
  timestamps: true,
})
class Hello extends Model {

  @IsNumber()
  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @IsString()
  @Column
  message!: string;

  @IsString()
  @Column
  sender!: string;
}

export { Hello };
