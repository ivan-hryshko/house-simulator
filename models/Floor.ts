import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { House } from "./House";
import { Flat } from "./Flat";

@Table({ tableName: "floors" })
export class Floor extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  level!: number;

  @ForeignKey(() => House)
  @Column(DataType.INTEGER)
  houseId!: number;

  @BelongsTo(() => House)
  house!: House;

    @HasMany(() => Flat)
    flats!: Flat[]
}
