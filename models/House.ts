import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { Game } from "./Game";
import { Floor } from "./Floor";

@Table({ tableName: "houses" })
export class House extends Model {
  @ForeignKey(() => Game)
  @Column(DataType.INTEGER)
  gameId!: number;

  @BelongsTo(() => Game)
  game!: Game;

    @HasMany(() => Floor)
    floors!: Floor[]
}
