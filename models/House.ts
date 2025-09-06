import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Game } from "./Game";

@Table({ tableName: "houses" })
export class House extends Model {
  @ForeignKey(() => Game)
  @Column(DataType.INTEGER)
  gameId!: number;

  @BelongsTo(() => Game)
  game!: Game;
}
