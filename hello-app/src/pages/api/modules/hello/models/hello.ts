import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  timestamps: true
})
class Hello extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;
  @Column
  message!: string;
  @Column
  sender!: string;
}

export { Hello };
