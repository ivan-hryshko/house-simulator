import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Floor } from "./Floor";

@Table({ tableName: "flats" })
export class Flat extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  number!: number;

  @ForeignKey(() => Floor)
  @Column(DataType.INTEGER)
  floorId!: number;

  @BelongsTo(() => Floor)
  floor!: Floor;
}
